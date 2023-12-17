import * as React from 'react';

import { Thread } from "../types/threads"
import { View } from "react-native";
import { Text } from "./Themed";
import { AntDesign, Feather, FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { timeAgo } from '../utils/time-ago';
import { useColorScheme, StyleSheet } from 'react-native';
import { Image} from "expo-image";


export const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function ThreadsItem(thread: Thread): JSX.Element {
    return (
        <View style={[styles.container, styles.shadowBox]}>
            <PostLeftSide {...thread} /> 
            <View style={{ gap: 6, flexShrink: 1}}>
                <PostHeading 
                    name={thread.author.name}
                    createdAt={thread.createdAt}
                    verified={thread.author.verified}
                />
                <Text style={styles2.fullWidthText}>{thread.content}</Text>
                {thread.image && (
                    <Image
                        source={thread.image}
                        style={{ width: "100%", minHeight: 200, borderRadius: 10, marginTop: 10 }}
                        placeholder={blurhash}
                        contentFit='cover'
                        transition={200}
                    />
                )}
                
                <BottomIcons />
                <PostFooter replies={thread.repliesCount} likes={thread.likesCount}  />
            </View>
        </View>
    );
}

function PostLeftSide(thread: Thread) {
    const currentTheme = useColorScheme();
    const borderColor = currentTheme === "light" ? "#00000020" : "#ffffff20";
    
    return (
        <View 
            style={{ justifyContent: "space-between" }}
        >
            <Image
                source={thread.author.photo}
                style={styles.image}
                placeholder={blurhash}
                contentFit='cover'
                transition={200}
            />
            <View 
                style={{
                borderWidth: 1,
                alignSelf: "center",
                borderColor: borderColor,
                flexGrow: 1,
                }}
            />
            <View
                style={{
                    width: 20,
                    alignItems: "center",
                    alignSelf: "center",
                    gap: 8,
                }}
            >
                {[1,2,3].map((index) => (
                    <Image
                        key={index}
                        // @ts-ignore
                        source={thread.replies[index - 1]?.author.photo}
                        style={{width: index * 9, height: index * 9, borderRadius: 15}}
                        placeholder={blurhash}
                        contentFit='cover'
                        transition={500}
                    />
                ))}
                
            </View>

        </View>
    )
}

function PostHeading({
    name,
    createdAt,
    verified,
} : {
    name: string;
    createdAt: string;
    verified: boolean;
}) {
    return (
        <View 
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <View 
                style={{ flexDirection: "row", alignItems: "center", gap: 10}}
            >
                <Text 
                    style={{ fontWeight: "500" }}
                >
                    {name}
                </Text>
                {verified && (
                    <MaterialIcons 
                        name="verified" size={14} color="#60a5fa" 
                    />
                )}
            </View>
            <View 
                style={{flexDirection: "row", alignItems: "center", gap: 10 }}
            >
                <Text 
                    style={{ color: "gray"}}
                >
                    {timeAgo(createdAt)}
                </Text>
                <Feather 
                    name="more-horizontal" 
                    size={14} 
                    color="gray" 
                />
            </View>
        </View>
    )
}

function PostFooter({ replies, likes}: { replies:number; likes: number; }) {
    return (
        <Text 
            style={{ color: "gray", paddingTop: 4 }}
        >
            {replies} replies . {likes} likes
        </Text>
    )
}

function BottomIcons() {
    const iconSize = 20;
    const currentTheme = useColorScheme();
    const iconColor = currentTheme === "dark" ? "white" : "black";

    return (
        <View 
            style={{ flexDirection: "row", alignItems: "center", gap: 10, paddingTop: 8 }}
            >
            <FontAwesome name="heart-o" size={iconSize} color={iconColor} />
            <Ionicons name="chatbubble-outline" size={iconSize} color={iconColor} />
            <AntDesign name="retweet" size={iconSize} color={iconColor} />
            <Feather name="send" size={iconSize} color={iconColor} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flexDirection: "row",
        gap: 6,
        paddingleft: 16,
        marginLeft: 16,
        marginRight: 16,
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    shadowBox: {
        // Other styling properties
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 10,
        // Approximate the first shadow (React Native doesn't support multiple shadows or spread)
        shadowColor: '#101828',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06, // 6% opacity
        shadowRadius: 2,
        // Android doesn't support individual shadow properties like iOS.
        // Elevation is used instead but it doesn't support fine-tuning.
        elevation: 1, // Adjust elevation to approximate the shadow on Android
      },
})

const styles1 = StyleSheet.create({
    shadowBox: {
      // Other styling properties
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 5,
      elevation: 5, // for Android
    },
});

const styles2 = StyleSheet.create({
    fullWidthText: {
      // Text takes full width and wraps
      width: '100%', // Takes full width of the container
      textAlign: 'left', // Aligns text to the left
      flexWrap: 'wrap', // Wraps text to the next line
      // Add any other text styling as needed
    },
  });
  