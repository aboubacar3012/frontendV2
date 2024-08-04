// CustomComponents.js
import {
  TouchableOpacity,
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faEye,
  faEyeSlash,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const CustomButton = ({
  onPress,
  title,
  buttonStyle,
  textStyle,
  imageSource,
  iconImageStyle,
  styleType = 'primary',
  disabled,
}) => {
  const baseButtonStyle =
    defaultButtonStyle[styleType] || defaultButtonStyle.primary;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[baseButtonStyle, buttonStyle]}
      disabled={disabled}>
      <Text style={[defaultButtonTextStyle, textStyle]}>{title}</Text>
      {imageSource && <Image source={imageSource} style={iconImageStyle} />}
    </TouchableOpacity>
  );
};

const CustomText = ({style, children}) => {
  return <Text style={[defaultTextStyle, style]}>{children}</Text>;
};

const CustomInput = ({
  placeholder,
  onChangeText,
  value,
  error,
  success,
  onFocus,
  onBlur,
  secureTextEntry,
  style,
}) => {
  return (
    <View style={[defaultInputStyle.container, style]}>
      <TextInput
        style={defaultInputStyle.input}
        placeholderTextColor="#999"
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
        secureTextEntry={secureTextEntry}
      />
      {error && <Text style={defaultInputStyle.error}>{error}</Text>}
      {success && <Text style={defaultInputStyle.success}>{success}</Text>}
    </View>
  );
};

const ProductResult = ({content, imageSource, imageStyle, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 2,
        flexWrap: 'wrap',
      }}
      onPress={onPress}>
      {imageSource && <Image source={imageSource} style={imageStyle} />}
      <Text
        style={{
          fontFamily: 'Poppins-Regular',
          color: '#461722',
          fontSize: 12,
          flex: 1,
          maxWidth: '70%',
        }}>
        {content}
      </Text>
      <FontAwesomeIcon icon={faChevronRight} size={15} color={'#f07289'} />
    </TouchableOpacity>
  );
};

const Comment = ({customerName, message, imageSource, rate, time}) => {
  const renderStar = rating => {
    const filledWidth = (rating / 5) * 100;

    return (
      <View style={styles.starContainer}>
        <Image source={require('../assets/star2.png')} style={styles.star} />
        <View style={[styles.filledStarContainer, {width: `${filledWidth}%`}]}>
          <Image
            source={require('../assets/star2.png')}
            style={styles.filledStar}
          />
          <Text>lol</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.commentContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.userInfoContainer}>
          {imageSource && (
            <Image style={styles.profileImage} source={imageSource} />
          )}
          <View>
            <CustomText style={styles.customerName}>{customerName}</CustomText>
            <CustomText style={styles.message}>{message}</CustomText>
          </View>
        </View>
        <View style={styles.ratingContainer}>
          {renderStar(rate)}
          <CustomText style={styles.rateText}>{rate}/5</CustomText>
        </View>
      </View>
      <CustomText style={styles.time}>{time}</CustomText>
    </View>
  );
};

const Comment2 = ({customerName, message, imageSource, rate, time}) => {
  const renderStar = rating => {
    const filledWidth = (rating / 5) * 100; // Calculate the width percentage of the filled star

    return (
      <View style={styles.starContainer}>
        <Image source={require('../assets/star2.png')} style={styles.star} />
        <View style={[styles.filledStarContainer, {width: `${filledWidth}%`}]}>
          <Image
            source={require('../assets/star2.png')}
            style={styles.filledStar}
          />
          <Text>lol</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.commentContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.userInfoContainer}>
          {imageSource && (
            <Image style={styles.profileImage} source={imageSource} />
          )}
          <View>
            <CustomText style={styles.customerName}>{customerName}</CustomText>
            <CustomText style={styles.time2}>{time}</CustomText>
            <CustomText style={styles.message}>{message}</CustomText>
          </View>
        </View>
        <View style={styles.ratingContainer}>
          {renderStar(rate)}
          <CustomText style={styles.rateText}>{rate}/5</CustomText>
        </View>
      </View>
    </View>
  );
};

const defaultButtonStyle = {
  primary: {
    width: '80%',
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    backgroundColor: '#f07289',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondary: {
    width: '80%',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#f07289',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Poppins-MediumItalic',
  },
};
const defaultButtonTextStyle = {
  color: 'white',
  fontFamily: 'Poppins-Regular',
};
const defaultTextStyle = {
  color: '#461722',
  textAlign: 'center',
  fontSize: 18,
  fontFamily: 'Poppins-Regular',
};

const defaultInputStyle = StyleSheet.create({
  container: {
    marginBottom: 10,
    width: '80%',
  },
  input: {
    width: '100%',
    height: 50,
    fontSize: 16,
    color: '#461722',
    fontFamily: 'Poppins-Regular',
    borderBottomWidth: 1, // Ajout de la bordure ici
    borderBottomColor: '#999', // Couleur de la bordure
  },
  icon: {
    width: 50,
    height: 50,
  },
  error: {
    color: 'red',
    marginTop: 5,
    textAlign: 'center', // Center the error message
  },
  success: {
    color: 'green',
    marginTop: 5,
    textAlign: 'center', // Cente
  },
});
const styles = StyleSheet.create({
  commentContainer: {
    padding: '5%',
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: '5%',
  },
  headerContainer: {
    flexDirection: 'row',
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    width: '80%',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  customerName: {
    fontFamily: 'Poppins-Medium',
    textAlign: 'left',
  },
  message: {
    fontFamily: 'Poppins-Regular',
    textAlign: 'left',
    fontSize: 14,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: '2.5%',
    gap: 5,
  },
  starContainer: {
    position: 'relative',
    width: 15,
    height: 15,
  },
  star: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  filledStarContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    overflow: 'hidden',
    backgroundColor: 'transparent', // Ensure the background is transparent
  },
  filledStar: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    tintColor: '#f07289', // Change the color of the filled portion if needed
  },
  rateText: {
    fontSize: 12,
  },
  time: {
    color: 'gray',
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    textAlign: 'left',
  },
  time2: {
    color: 'gray',
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    textAlign: 'left',
    bottom: 5,
  },
});

export {
  CustomButton,
  CustomText,
  CustomInput,
  ProductResult,
  Comment,
  Comment2,
};
