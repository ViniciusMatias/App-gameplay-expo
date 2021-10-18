import React, { useState } from "react";
import { View, Text, TextInput, Image, StatusBar } from "react-native";
import { styles } from "./styles";
import illustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from "../../components/buttonIcon";

export function Signin() {

    const [text, setText] = useState('')
    return (

        <View style={styles.container}>
            <StatusBar />
            <Image source={illustrationImg} style={styles.image} resizeMode="stretch" />
            <StatusBar barStyle="light-content" translucent />
            <View style={styles.content}>
                <Text style={styles.title}>
                    Organize {`\n`}
                    suas jogatinas {`\n`}
                    facilmente
                </Text>
                <Text style={styles.subtitle}>
                    Crie grupos para jpgar seus games {`\n`}
                    favoritos com seus amigos
                </Text>

                <ButtonIcon title="Entrar com discord" activeOpacity={0.7} />


            </View>
        </View>

    );
}