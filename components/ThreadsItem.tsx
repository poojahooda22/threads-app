import * as React from 'react';

import { Thread } from "../types/threads"
import { View } from "react-native";
import { Text } from "./Themed";
import { MaterialIcons } from '@expo/vector-icons';

export default function ThreadsItem(thread: Thread): JSX.Element {
    return (
        <View>
            <Text>{thread.author.name}</Text>
            <View>
                <PostHeading 
                    name={thread.author.name}
                    createdAt={thread.createdAt}
                    verified={thread.author.verified}
                />
            </View>
        </View>
    );
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
        <View>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10}}>
                <Text>{name}</Text>
                {verified && (
                    <MaterialIcons name="verified" size={14} color="#60a5fa" />
                )}
            </View>
        </View>
    )
}