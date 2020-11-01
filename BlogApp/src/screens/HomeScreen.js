import React, {useState} from "react";
import {ScrollView, View, StyleSheet} from "react-native";
import {Card} from "react-native-elements";

import PostCard from "../components/PostCardComponent";
import HeaderHome from "../components/HeaderComponent";
import LikeCommentButton from "../components/LikeCommentComponent";
import InputCard from "../components/StoreDataComponent";

import { AuthContext } from "../providers/AuthProvider";


import { storeDataJSON } from "../functions/AsyncStorageFunctions";
import { getDataJSON } from "../functions/AsyncStorageFunctions";


const HomeScreen = (props) => {

  const [postID, setpostID] = useState([]);
  const [input, setInput] = useState([]);

  const post =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

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
            <InputCard
                Text="What's On Your Mind?"
                currentFunc={setInput}
                currentText={input}
                pressFunction={async () => {
                    let currentPost = {
                        userId: auth.CurrentUser.name,
                        Id: Math.random().toString(36).substring(7),
                        title: " ",
                        body: input,
                    };
                setpostID(currentPost.Id);
                storeDataJSON(
                  JSON.stringify(postID),
                  JSON.stringify(currentPost)
                );
                let UserData = await getDataJSON(JSON.stringify(postID));
                console.log(UserData);
              }}
            />
        </Card>
        <ScrollView>
                <Card>
                    <PostCard author="John" title="The facade" body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                    <Card.Divider />
                    <LikeCommentButton
                        postId="1"
                        navigateFunc={() => {
                            props.navigation.navigate("PostScreen", {
                            postId: "1",
                            });
                        }}
                    />
                </Card>
                <Card>
                    <PostCard author="Zara" title="The Lodge" body="Six months after their mother's suicide, Aidan and Mia's father takes them for a family vacation to his girlfriend's lodge. None knows zilkod. However, things take a turn when they start experiencing strange events."/>
                    <Card.Divider />
                    <LikeCommentButton
                        postId="2"
                        navigateFunc={() => {
                            props.navigation.navigate("PostScreen", {
                            postId: "2",
                            });
                        }}
                    />
                </Card>
                <Card>
                    <PostCard author="Zil" title="The president" body="they see you from where you cannot see them. you can just feel their existence. you cannot run. everything will be finished."/>
                    <Card.Divider />
                    <LikeCommentButton
                        postId="3"
                        navigateFunc={() => {
                            props.navigation.navigate("PostScreen", {
                            postId: "3",
                            });
                        }}
                    />
                </Card>
                <Card>
                    <PostCard author="Harry" title="unknown" body="they will catch you soon. you cannot escape except for one condition. you have to submit yourself. you know how."/>
                    <Card.Divider />
                    <LikeCommentButton
                        postId="4"
                        navigateFunc={() => {
                            props.navigation.navigate("PostScreen", {
                            postId: "4",
                            });
                        }}
                    />
                </Card>
                <Card>
                    <PostCard author="Trump" title="Election" body="Campaigning in Miami, the Democratic presidential candidate signaled an intent to advance a more forceful critique of the president, just days after dialing back his attacks while Trump battled his illness at Walter Reed National Military Medical Center and his prognosis was clouded in uncertainty."/>
                    <Card.Divider />
                    <LikeCommentButton
                        postId="5"
                        navigateFunc={() => {
                            props.navigation.navigate("PostScreen", {
                            postId: "5",
                            });
                        }}
                    />
                </Card>
        </ScrollView>
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

export default HomeScreen;