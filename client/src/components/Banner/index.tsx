import React, { FC } from 'react';
import styles from './style';

interface bannerInfo {
    title: string,
    name: string,
    mission: string,
    respond: number
}

const Banner: FC<bannerInfo> = (props) => (
    <div style={styles.banner}>
        <h1>{props.name}, <br/> {props.title}</h1>
        <h1><strong>Mission: </strong>{props.mission}</h1>
        <p>you have {props.respond} to respond</p>
    </div>    
);

export default Banner;