import { Typography, Paper } from '@material-ui/core';
import Millcity from '../../mill-city-museum-bw.png';
import './Top.css';

export default function Top() {
  return (
    <div className="top">
      <img src={Millcity} width="550" alt="mill city museum photo in black and white" class="cover-photo"/>
      <div className="name">TRAVIS J HUSS</div>
      <div className="job-title">Full Stack Software Engineer</div>
    </div>
  );
}
