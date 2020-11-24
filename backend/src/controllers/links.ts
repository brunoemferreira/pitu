import {Request, Response} from 'express';

function postLink( req: Request, res: Response ){
   res.send('postLink');
}

function getLink( req: Request, res: Response ){
  res.send('getLink');
}

function hitLink( req: Request, res: Response ){
  res.send('hitLink');
}

export default {
  postLink,
  getLink,
  hitLink
}