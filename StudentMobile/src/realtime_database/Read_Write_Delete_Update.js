import firebase from 'firebase';

export function writeUserData(Collection, Name, Pass) {
  const newRef = '/' + Collection;
  firebase
    .database()
    .ref(newRef)
    .set({
      Name,
      Pass,
    })
    .then(data => {
      //success callback
      console.log('data ', data);
    })
    .catch(error => {
      //error callback
      console.log('error ', error);
    });
}

export function deleteData(Collection) {
  const newRef = Collection + '/';
  firebase.database().ref(newRef).remove();
}

export async function verifyLogin(Collection, username, password) {
  const ref = Collection + '/';
  console.log('output');
  var userexist = false;
  await firebase
    .database()
    .ref(ref)
    .once('value', function (snapshot) {
      snapshot.forEach(function (child) {
        var myJson = child.toJSON();
        console.log(myJson.Name + ' ' + myJson.Pass);
        if (myJson.Name === username && myJson.Pass === password) {
          userexist = true;
          return;
        }
      });
    });
  return userexist;
}

export async function getAsync(Collection, username, password) {
  const canLogin = await verifyLogin(Collection, username, password);
  return canLogin;
}

// push
export function PushUserData(Collection, Name, Pass) {
  firebase
    .database()
    .ref(Collection + '/')
    .push({
      Name,
      Pass,
    })
    .then(data => {
      //success callback
      console.log('data ', data);
    })
    .catch(error => {
      //error callback
      console.log('error ', error);
    });
}
