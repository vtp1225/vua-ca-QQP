package com.example.VuaCaQQP.VuaCa_QQP_Backend.service;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.request.AddCartProductRequest;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.request.UpdateCartProductRQ;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.respone.CartProductRespone;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.entity.Cart;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.entity.CartProduct;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.entity.Product;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.entity.Users;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.exception.AppExceptions;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.exception.ErrorCode;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.mapper.CartProductMapper;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.repository.CartProductRepository;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.repository.CartRepository;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.repository.ProductRepository;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.repository.UsersRepository;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE,makeFinal = true)
public class CartProductService {
    CartProductRepository repository;
    ProductRepository productRepository;
    CartRepository cartRepository;
    CartProductMapper mapper;
    UsersRepository usersRepository;

    public List<CartProductRespone> getCartProductByUserId(Integer userId) {
        Users user = usersRepository.findById(userId)
                .orElseThrow(() -> new AppExceptions(ErrorCode.INVALID_KEY));
        Cart cart = cartRepository.findByUser(user);
        return repository.findAllByCart(cart)
                .stream()
                .map(mapper::toCartProductRespone)
                .toList();
    }
    public CartProductRespone addCartProduct(AddCartProductRequest request, Integer userId) {

        if (request.getQuantity() == null || request.getQuantity() <= 0) {
            throw new AppExceptions(ErrorCode.INVALID_FORMAT);
        }

        Users user = usersRepository.findById(userId)
                .orElseThrow(() -> new AppExceptions(ErrorCode.INVALID_KEY));

        Cart cart = cartRepository.findByUser(user);

        Product product = productRepository.findById(request.getProductId())
                .orElseThrow(() -> new AppExceptions(ErrorCode.INVALID_KEY));

        Optional<CartProduct> existing =
                repository.findByCartAndProduct(cart, product);

        CartProduct cartProduct;

        if (existing.isPresent()) {
            cartProduct = existing.get();
            cartProduct.setQuantity(cartProduct.getQuantity() + request.getQuantity());
        } else {
            cartProduct = CartProduct.builder()
                    .cart(cart)
                    .product(product)
                    .quantity(request.getQuantity())
                    .build();
        }

        return mapper.toCartProductRespone(repository.save(cartProduct));
    }

    public CartProductRespone updateCartProduct(
            UpdateCartProductRQ rq,
            Integer cartProductId,
            Integer userId
    ) {
        CartProduct cartProduct = repository.findById(cartProductId)
                .orElseThrow(() -> new AppExceptions(ErrorCode.INVALID_KEY));

        if (cartProduct.getCart().getUser().getUserId()!=userId) {
            throw new AppExceptions(ErrorCode.UNAUTHORIZED);
        }

        if (rq.getQuantity() == null || rq.getQuantity() <= 0) {
            throw new AppExceptions(ErrorCode.INVALID_FORMAT);
        }
        cartProduct.setQuantity(rq.getQuantity());

        return mapper.toCartProductRespone(
                repository.save(cartProduct)
        );
    }

    public void  deleteCartProduct(Integer cartProductId,Integer userId)
    {
        CartProduct cartProduct = repository.findById(cartProductId)
                .orElseThrow(() -> new AppExceptions(ErrorCode.INVALID_KEY));
        Integer ownerId = cartProduct.getCart().getUser().getUserId();
        if (!ownerId.equals(userId)) {
            throw new AppExceptions(ErrorCode.UNAUTHORIZED);
        }
        repository.delete(cartProduct);
    }
}
