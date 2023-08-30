import React from 'react';
import { ReactSVG } from 'react-svg';

interface IconProps {
    name: string;
    className?: string;
}

const Icon = ({ name, className }: IconProps) => {
    return (
        <ReactSVG src={`/${name}.svg`} className={className} wrapper='svg' />
    );
};

export default Icon;