package com.example.VuaCaQQP.VuaCa_QQP_Backend.mapper;

import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.request.UserRequest;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.request.UserUpdateRequest;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.dto.respone.UserResponse;
import com.example.VuaCaQQP.VuaCa_QQP_Backend.entity.Users;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface UsersMapper {
    Users toUser(UserRequest request);
    UserResponse toUserResponse(Users Users);
    void updateUser(@MappingTarget Users users, UserUpdateRequest request);
}
