package com.polafix.polafix.controller;

import java.util.List;


import com.polafix.polafix.pojos.*;

public interface UserService {
    List<User> getAllUsers();
    User getUserById(String email);
    User createUser(User user);
    User updateUser(String email, User user);
    User updateUserInlist(String email, User user);
    boolean deleteUser(String email);
    User saveUser(User user);
    User updateInList(String email, User user);
}