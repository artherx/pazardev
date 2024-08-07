import { Button, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { ThemeBarButton } from "@/components/ThemeBarButton";
import Modal from "react-native-modal";
import { ThemedButtonIcon } from "@/components/ThemedButtonIcon";

const emplemen = () => {
	const [isModalVisible, setModalVisible] = useState(false);
	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};
	return (
		<ThemedView style={{ flex: 1 }}>
			<ThemeBarButton>
        <ThemedButtonIcon title="Añadir" onPress={toggleModal}/>
        <ThemedButtonIcon title="Añadir" name="menu-sharp"/>
      </ThemeBarButton>

			<Modal isVisible={isModalVisible}>
				<View style={{ flex: 1 }}>
					<ThemedText>Hello!</ThemedText>

					<Button title="Hide modal" onPress={toggleModal} />
				</View>
			</Modal>
		</ThemedView>
	);
};

export default emplemen;

const styles = StyleSheet.create({});
