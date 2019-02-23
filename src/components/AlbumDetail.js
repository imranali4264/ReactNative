import React, { Component } from "react";
import { Text, View, Image, Linking } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";

const AlbumDetail = ({ record }) => {
  const { thumbnail_image, title, artist, image, url } = record;
  const {
    imageStyle,
    headerCardStyle,
    imageViewStyle,
    headerTextStyle,
    imageAlbumStyle
  } = styles;
  return (
    <Card>
      <CardSection>
        <View style={imageViewStyle}>
          <Image style={imageStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={headerCardStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={imageAlbumStyle} source={{ uri: image }} />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>Buy Now</Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerCardStyle: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  headerTextStyle: {
    fontSize: 18
  },
  imageStyle: {
    height: 50,
    width: 50
  },
  imageViewStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  imageAlbumStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
