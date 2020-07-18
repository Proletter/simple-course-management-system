import firebase from 'firebase'


  const firebaseConfig = {
    apiKey: "AIzaSyAvPMnj9pR4Crc56j94h3DOnXBATKKMAQY",
    authDomain: "management-system1.firebaseapp.com",
    databaseURL: "https://management-system1.firebaseio.com",
    projectId: "management-system1",
    storageBucket: "management-system1.appspot.com",
    messagingSenderId: "745979362234",
    appId: "1:745979362234:web:f02931f12f577e88fc7b83",
    measurementId: "G-KW45NRZXC7"
  };

  const fire = firebase.initializeApp(firebaseConfig)

export default fire