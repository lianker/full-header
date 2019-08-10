import React from 'react';
import FullHeader from '../src/Main'; // This is our component
import { storiesOf } from '@storybook/react';

storiesOf('Full header', module)
    .add('with title', () => (
        <FullHeader title="Cerodonia" />
    ))
    .add('with title ,subtitle', () => (
        <FullHeader title="Cerodonia"
            subtitle="Um mundo magico habitado por feras"
        />
    ))
    .add('with title ,subtitle, bgColor', () => (
        <FullHeader
            title="Cerodonia"
            subtitle="Um mundo magico habitado por feras"
            bgColor="#0000FF"
        />
    ))
    .add('with title ,subtitle, bgColor and text color', () => (
        <FullHeader
            title="Cerodonia"
            subtitle="Um mundo magico habitado por feras"
            bgColor="#0000FF"
            textColor="#00FF00"
        />
    ))
    .add('with title ,subtitle, bgColor, text color and font', () => (
        <FullHeader
            title="Cerodonia"
            subtitle="Um mundo magico habitado por feras"
            bgColor="#FFF"
            textColor="#00FF00"
            font="Times New Roman"
        />
    ))
    .add('with title ,subtitle, bgImage', () => (
        <FullHeader
            title="Cerodonia"
            subtitle="Um mundo magico habitado por feras"
            bgImage="https://www.miaonline.org/wp-content/uploads/red-background-and-photo-high-resolution-download.jpg"
        />
    ))
    .add('with title ,subtitle, video', () => (
        <FullHeader
            title="Cerodonia"
            subtitle="Um mundo magico habitado por feras"
            video="https://static.videezy.com/system/resources/previews/000/005/013/original/Golden_Nebula_4K_Motion_Background.mp4"
        />
    ));
