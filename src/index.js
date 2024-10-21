import "./style.css";
import {getPath} from './getPath';

const element = document.querySelector('li.frendly');
const path = getPath(element);
console.log(path);