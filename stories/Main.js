import React from 'react';
import FullHeader from '../src/Main'; // This is our component
import { storiesOf } from '@storybook/react';

storiesOf('Full header', module)
    .add('with title', () => (
        <FullHeader title="TDD" />
    ))
    .add('with title ,subtitle', () => (
        <FullHeader title="TDD" subtitle="teste" />
    ))
    .add('with title ,subtitle, bgColor', () => (
        <FullHeader title="TDD" subtitle="teste" bgColor="#ccc" />
    ))
    .add('with title ,subtitle, bgColor and text color', () => (
        <FullHeader title="TDD" subtitle="teste" bgColor="#ccc" textColor="#555" />
    ))
    .add('with title ,subtitle, bgColor, text color and font', () => (
        <FullHeader title="TDD" subtitle="teste" bgColor="#ccc" textColor="#555" font="verdana" />
    ))
    .add('with title ,subtitle, bgImage', () => (
        <FullHeader title="TDD" subtitle="teste" bgImage="img" />
    ))
    .add('with title ,subtitle, video', () => (
        <FullHeader title="TDD" subtitle="teste" video="img" />
    ));
