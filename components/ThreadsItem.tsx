import * as React from 'react';

import { Thread } from "../types/threads"
import { View } from "react-native";
import { Text } from "./Themed";

export default function ThreadsItem(thread: Thread): JSX.Element {
    return (
        <View>
            <Text>{thread.author.name}</Text>
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
            <View>
                
            </View>
        </View>
    )
}