package com.example.VuaCaQQP.VuaCa_QQP_Backend.service;

import com.example.VuaCaQQP.VuaCa_QQP_Backend.Enum.OrderStatus;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.request.CreateOrderRequest;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.respone.OrderItemResponse;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.respone.OrderResponse;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.entity.*;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.exception.AppExceptions;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.exception.ErrorCode;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.mapper.OrderMapper;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.repository.*;
import jakarta.transaction.Transactional;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE,makeFinal = true)
public class OrderService {

     OrderRepository orderRepository;
     OrderItemRepository orderItemRepository;
     CartRepository cartRepository;
     CartProductRepository cartProductRepository;
     ProductRepository productRepository;
     OrderMapper orderMapper;
     UsersRepository usersRepository;
    @Transactional
    public OrderResponse createOrder(Integer userId, CreateOrderRequest request) {
        Users u = usersRepository.findById(userId).orElseThrow(()->new AppExceptions(ErrorCode.INVALID_KEY));
        Cart cart = cartRepository.findByUser(u);
        List<CartProduct> cartItems =
                cartProductRepository.findAllByCart(cart);
        if (cartItems.isEmpty())
            throw new RuntimeException("Cart is empty");

        double total = 0;

        for (CartProduct item : cartItems) {
            Product p = productRepository.findById(item.getProduct().getProductId())
                    .orElseThrow();

            if (p.getStockQuantity() < item.getQuantity())
                throw new RuntimeException("Out of stock");

            total += p.getPrice() * item.getQuantity();
        }

        Order order = orderRepository.save(
                Order.builder()
                        .userId(userId)
                        .orderDate(new Date())
                        .status(OrderStatus.PENDING)
                        .totalAmount(total)
                        .shippingAddress(request.getShippingAddress())
                        .note(request.getNote())
                        .build()
        );

        List<OrderItemResponse> itemResponses = new ArrayList<>();

        for (CartProduct item : cartItems) {
            Product p = productRepository.findById(item.getProduct().getProductId()).get();

            OrderItem orderItem = orderItemRepository.save(
                    OrderItem.builder()
                            .orderId(order.getOrderId())
                            .productId(p.getProductId())
                            .quantity(item.getQuantity())
                            .priceAtPurchase(p.getPrice())
                            .build()
            );

            p.setStockQuantity(p.getStockQuantity() - item.getQuantity());
            productRepository.save(p);
            itemResponses.add(orderMapper.toOrderItemResponse(orderItem));
        }
        cartProductRepository.deleteByCart(cart);
        OrderResponse response = orderMapper.toOrderResponse(order);
        response.setItems(itemResponses);
        return response;
    }
}
