const handleSubmitForm = () => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const mobilenum = /^(\+\d{1,3}[- ]?)?\d{10}$/;

  if (!emailRegex.test(email)) {
    Alert.alert('validation Error', 'please enter valid email');
  } else if (!passwordRegex.test(password)) {
    Alert.alert(
      'Invalid password',
      'Your password must contain at least 8 characters including at least one uppercase letter, one lowercase letter, and one number.',
    );
  } else if (!mobilenum.test(number)) {
    Alert.alert('Validation Error', 'mobile number should be 10 digit');
  } else if (!name.trim()) {
    Alert.alert('Validation Error', ' name can not be empty');
  }
  //  Alert.alert('form submit successfully','submit successfully')
  else navigation.navigate(WelcomeScreen);
};