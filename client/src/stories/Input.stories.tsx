import React from 'react';
import {Input} from '../components/Input';
import {ComponentMeta, ComponentStory} from '@storybook/react';




export default {
    title: 'Input',
    component: Input,
    argTypes: {
        type: {
            type: 'string',
            name: 'Type of input',

        }
    }
} as ComponentMeta<typeof Input>;


const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Text = Template.bind({});
Text.args = {
    type: 'text'
}