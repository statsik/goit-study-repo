type User = {
    name: string;
    surname: string;
    email: string;
    password: string;
}
    
function createOrUpdateUser<T extends Partial<User>>(initialValues:T){
      // Оновлення користувача
}
    
createOrUpdateUser({ 
    email: 'user@mail.com', 
    password: 'password123' 
});
    