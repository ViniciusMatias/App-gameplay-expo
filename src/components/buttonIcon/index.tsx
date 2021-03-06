import React from "react";
import { TouchableOpacity, View, Image, Text, TouchableOpacityProps } from "react-native";
import DiscordImg from '../../assets/discord.png';
import { styles } from './style';

type Props = TouchableOpacityProps & {
    title: string
}

export function ButtonIcon({ title, ...rest }: Props) {
    return (
        <TouchableOpacity style={styles.container} >
            <View style={styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.icon} />
            </View>
            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}