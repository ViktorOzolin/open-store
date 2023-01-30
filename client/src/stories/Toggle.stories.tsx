import React from 'react';
import {Toggle} from '../components/Toggle';
import {ComponentMeta, ComponentStory} from "@storybook/react";


export default {
    title: 'Toggle',
    component: Toggle,
    argTypes: {
        size: {
            name: 'Size',
            type: 'string',
            options: ['small', 'medium', 'large'],
            control: {
                type: 'radio'
            },
        },
        checked: {
            name: 'Checked',
            type: 'boolean',
            defaultValue: true,
        },
        disabled: {
            name: 'Disabled',
            type: 'boolean',
            defaultValue: false,
        },
        speed: {
            name: 'Speed',
            type: 'number',
            defaultValue: 200,
        },
        style: {
            name: 'User styles'
        }
    }
} as ComponentMeta<typeof Toggle>;


const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args}/>


export const Small = Template.bind({});
Small.args = {
    size: 'small',
}

export const Medium = Template.bind({});
Medium.args = {
    size: 'medium',
}

export const Large = Template.bind({});
Large.args = {
    size: 'large',
}