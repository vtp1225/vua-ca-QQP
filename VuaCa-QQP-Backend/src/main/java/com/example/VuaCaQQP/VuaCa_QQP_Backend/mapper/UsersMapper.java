package com.example.VuaCaQQP.VuaCa_QQP_Backend.mapper;

import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.request.UserRequest;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.respone.UsersRespone;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.entity.Users;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UsersMapper {
    Users toUser(UserRequest request);
    UsersRespone toUserRespone (Users Users);
}
