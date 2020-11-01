import React, {useState} from "react";
import { ScrollView, View, StyleSheet,FlatList} from "react-native";
import {Card} from "react-native-elements";
import PostCard from "../components/PostCardComponent";
import InputCard from "../components/StoreDataComponent";

import { storeDataJSON } from "../functions/AsyncStorageFunctions";
import { getDataJSON } from "../functions/AsyncStorageFunctions";

import { AuthContext } from "../providers/AuthProvider";
import HeaderHome from "../components/HeaderComponent";

const PostScreen = (props) => {
  //const postID = props.route.params.postId;
  const [input, setInput] = useState([]);
  const [postID, setpostID] = useState([]);

  return (
      <AuthContext.Consumer>
        {(auth) => (
          <View style={styles.viewStyle}>
            <HeaderHome
              DrawerFunction={() => {
                props.navigation.toggleDrawer();
              }}
            />
            <Card>
            <PostCard author="John" title="the facade" body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
            </Card>
            <Card>
              <InputCard
               Text="Post a Comment"
                currentFunc={setInput}
                currentText={input}
                pressFunction={async () => {
                  let currentComment = {
                    postId: postID,
                    id: Math.random().toString(36),
                    name: auth.CurrentUser.name,
                    email: "",
                    body: input,
                  };
                  storeDataJSON(
                    JSON.stringify(postID),
                    JSON.stringify(currentComment)
                  );
                  let UserData = await getDataJSON(JSON.stringify(postID));
                  console.log(UserData);
                }} />
            </Card>
          </View>
        )}
      </AuthContext.Consumer>
    );
  } 

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "blue",
  },
  viewStyle: {
    flex: 1,
  },
});

export default PostScreen;