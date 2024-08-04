import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  CustomButton,
  CustomInput,
  CustomText,
} from '../components/CustomComponents';
// import {useNavigation} from '@react-navigation/native';
// import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';

const {width, height} = Dimensions.get('window');

const SigninScreen = () => {
  const [emailError, setEmailError] = useState('');
  // const navigation = useNavigation();
  const [signinEmail, setSigninEmail] = useState('');
  const [signinPassword, setSigninPassword] = useState('');
  const [errors, setErrors] = useState({}); // State to store errors
  const [passwordVisible, setPasswordVisible] = useState(false)
  
//   const { login, userRole, setUserRole } = useAuth();
  
  const handleInputFocus = () => {
    setErrors(''); // Effacez les erreurs lorsque le champ est en focus
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

//   const updateUserRoleAndStorage = async (email) => {
//     try {
//       const roleData = await userAPI.checkUserRole(email);
//       if (roleData.result && roleData.user && roleData.user.roles) {
//         const roles = roleData.user.roles;
//         const userRole = roles.includes('ambassador') ? 'ambassador' : 'visitor';
//         setUserRole(userRole);
//         await AsyncStorage.setItem('userRole', userRole);
//       } else {
//         setUserRole('visitor');
//         await AsyncStorage.setItem('userRole', 'visitor');
//       }
//     } catch (error) {
//       console.error("Error fetching user role:", error);
//       setUserRole('visitor');
//       await AsyncStorage.setItem('userRole', 'visitor');
//     }
//   };

//   const handleSignin = async () => {
//     const fcmToken = await firebase.messaging().getToken();
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     const errors = {};
//     if (!signinEmail.trim() || !emailRegex.test(signinEmail)) {
//       setErrors({ ...errors, email: "Email invalide" });
//       return;
//     }
//     if (!signinPassword.trim()) {
//       setErrors({ ...errors, password: "Mot de passe requis" });
//       return;
//     }
  
//     try {
//       const data = await userAPI.signin({ email: signinEmail, password: signinPassword, fcmToken });

//       if (data.result && data.token) {

//         const nbrNotifications = await userAPI.getNotificationCount(data._id)

        
        
//         if (nbrNotifications.success) {

//           await AsyncStorage.setItem('nbrNotifications', nbrNotifications.count);
          
//         }else{
//           await AsyncStorage.setItem('nbrNotifications', "0");
//         }

//         await AsyncStorage.setItem('token', data.token);
//         await AsyncStorage.setItem('isLoggedIn', 'true');
//         await AsyncStorage.setItem('email', signinEmail);
//         await AsyncStorage.setItem('datasUser', JSON.stringify(data));

//         await AsyncStorage.setItem('restriction', JSON.stringify(data.restriction));
//         await AsyncStorage.setItem('restrictionReport', JSON.stringify(data.countReport));

//         login(signinEmail, data.token); 
//         updateUserRoleAndStorage(signinEmail);
//       } else {
//         setEmailError("Identifiants incorrects");
//       }
//     } catch (error) {
//       console.error("Sign in error:", error);
//     }
//   };

//   const signInWithGoogle = async () => {
//     try {
//         await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
//         const { idToken } = await GoogleSignin.signIn();
//         if (!idToken) {
//             throw new Error("Failed to get ID token from Google Signin");
//         }
        
//         const fcmToken = await firebase.messaging().getToken(); // Récupérer le fcmToken ici

//         const userData = await userAPI.googlesignin({ token: idToken, fcmToken }); // Inclure le fcmToken dans le corps de la requête
//         if (userData.result && userData.email) {
//             await AsyncStorage.setItem('token', idToken);
//             await AsyncStorage.setItem('isLoggedIn', 'true');
//             await AsyncStorage.setItem('email', userData.email);
//             await AsyncStorage.setItem('datasUser', JSON.stringify(userData));
//             /* await AsyncStorage.setItem('restriction', JSON.stringify(userData.restriction)); */
//             login(userData.email, idToken, true);
//             updateUserRoleAndStorage(userData.email);
//         } else {
//             throw new Error("Failed to authenticate or missing email in user data");
//         }
//     } catch (error) {
//         console.error("Google Sign-in error:", error);
//     }
// };


//   useEffect(() => {
//     GoogleSignin.configure({
//       webClientId: process.env.WEB_CLIENT_ID, 
//       scopes: ['email', 'profile']
//     });
//   }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <CustomText style={styles.title}>Connexion</CustomText>
        </View>
        <CustomInput
          placeholder={'Votre adresse e-mail'}
          style={[styles.input, {marginTop: height * 0.05}]}
          onChangeText={value => setSigninEmail(value)}
          onFocus={handleInputFocus}
          error={errors.email ? errors.email : emailError}
        />
        <View style={styles.passwordContainer}>
          <CustomInput
            placeholder={'Mot de passe'}
            style={styles.input}
            onChangeText={value => setSigninPassword(value)}
            onFocus={handleInputFocus}
            secureTextEntry={!passwordVisible}
            error={errors.password}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={togglePasswordVisibility}>
            {/* <FontAwesomeIcon
              icon={passwordVisible ? faEyeSlash : faEye}
              size={20}
            /> */}
          </TouchableOpacity>
        </View>
        <CustomButton
          buttonStyle={{paddingVertical: '5%'}}
          title={'Se connecter'}
          textStyle={styles.buttonText}
          // onPress={handleSignin}
        />
        <View style={styles.forgotPasswordContainer}>
          <TouchableOpacity
            onPress={() => {
              // navigation.navigate('PasswordReset');
            }}>
            <CustomText style={styles.forgotPasswordText}>
              Mot de passe oublié ?
            </CustomText>
          </TouchableOpacity>
        </View>
        <View style={styles.socialsContainer}>
          <CustomText style={styles.orText}>Ou connectez vous avec</CustomText>
          <View style={styles.socialButtons}>
            <TouchableOpacity
              style={styles.socialButton}
              // onPress={signInWithGoogle}
            >
              <Image
                source={require('../assets/google.png')}
                style={styles.socialImage}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={require('../assets/fb.png')}
                style={styles.socialImage}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={require('../assets/apple.png')}
                style={styles.socialImage}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.signupContainer}>
          <CustomText style={styles.signupText}>
            Pas encore de compte ?{' '}
          </CustomText>
          <TouchableOpacity
            onPress={() => {
              // navigation.navigate('SignupMail');
            }}>
            <CustomText style={styles.signupLink}>Inscrivez-vous !</CustomText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    width: '100%',
  },
  title: {
    fontSize: width * 0.07,
    fontFamily: 'Poppins-Medium',
  },
  input: {
    width: '100%',
    marginTop: height * 0.01,
    paddingTop: height * 0.01,
  },
  passwordContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * 0.025
  },
  eyeIcon: {
    marginLeft: -width * 0.1,
    marginTop: height * 0.02,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Poppins-Medium',
  },
  forgotPasswordContainer: {
    marginTop: height * 0.03,
  },
  forgotPasswordText: {
    fontFamily: 'Poppins-Medium',
  },
  socialsContainer: {
    marginTop: height * 0.1,
  },
  orText: {
    marginBottom: height * 0.02,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: width * 0.1,
  },
  socialButton: {
    borderWidth: 1, 
    borderColor: 'lightgrey',
    padding: width * 0.05,
    borderRadius: 5,
  },
  socialImage: {
    width: width * 0.05,
    height: width * 0.05,
  },
  signupContainer: {
    marginTop: height * 0.05,
    flexDirection: 'row',
  },
  signupText: {
    fontFamily: 'Poppins-Medium',
    fontSize: width * 0.04,
  },
  signupLink: {
    color: '#f07289',
    fontFamily: 'Poppins-Medium',
    fontSize: width * 0.04,
  },
});

export default SigninScreen;
