import { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

export default function useContent(target) {
  const [content, setContent] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase
      .firestore()
      .collection(target) // target will be either films/series
      .get()
      .then(snapshot => {
        const allContent = snapshot.docs.map(contentObj => ({
          ...contentObj.data(),
          codId: contentObj.id,
        }));

        setContent(allContent);
      })
      .catch(err => {
        console.log(err.message);
      });
  }, []);

  return { [target]: content };
}
