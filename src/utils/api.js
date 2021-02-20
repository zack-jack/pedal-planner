import { get } from './http';

const api = process.env.REACT_APP_PEDAL_TETRIS_API;

export const getPedals = () => get(`${api}/v1/pedals`, {}, {});

export const getPedalboards = () => get(`${api}/v1/pedalboards`, {}, {});
