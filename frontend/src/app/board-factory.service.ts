import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BoardFactoryService {

  constructor(
    private http: HttpClient
  ) {

  }

  createBoardArray( board ) {
    // this section adds rows and columns onto data from
    // database
    const xyVals = [
      [], [2, 3], [4.5, 2.5], [5, 1.2], [6.3, 2.2], [8.2, 2.3], [9.5, 1.5], [10.5, 3.2], 
      [12.3, 1], [11.5, 4.5], [12, 7.3], [10, 6.5], [8.2, 5.2], [6.8, 4.3], [4.8, 5.1], 
      [2.6, 4.7], [1.2, 6.8], [1.3, 9], [3.8, 9], [4, 6.8], [6.8, 7], [9, 8.4], [15.8, 8.4], 
      [14.5, 7], [14, 4.2], [15, 2.8], [15.6, 1], [17.2, 2], [19, 3], [19.5, 1.3], [23, 1.4], 
      [23.6, 3.6], [21, 5], [18.5, 5.5], [17, 4.4], [16, 6], [19, 8], [21, 7], [23, 6.5],
      [23.1, 8.5], [22, 10.2], [23.3, 13], [23.7, 15], [21.2, 15], [20.8, 12.9], [20.5, 10], 
      [21.3, 8.5], [19, 9.3], [17.2, 9], [16.6, 10.4], [16.6, 12.5], [19, 14], [19, 16], 
      [17, 15.5], [15, 14], [13.7, 15.4], [11.8, 14.7], [13, 12.4], [11, 11], [10.2, 13.5], 
      [7.9, 12.4], [8.5, 14.5], [7, 15.5], [5, 14.5], [3.5, 16], [1.4, 14.1], [1, 11], 
      [2.8, 13], [5.2, 12.9], [4.5, 10.8], [6.7, 12], [8, 10.8], [6, 8.6], [11.5, 9.5]
    ];

    for (let i = 1; i <= 73; i++) {
      board[i].row = (xyVals[i][1] * 3.5) * 10;
      board[i].col = ((xyVals[i][0] * 3.6) + 10) * 10 - 112;
    }

    const boardArray = [];
    for (const key in board) {
      if (board.hasOwnProperty(key) ) {
        boardArray.push(board[key]);
      }
    }
    return boardArray;
  }

  boardInit( gameId, userId ) {
    return this.http.get('/api/games/boardInit', {
      params: {
        gameId,
        userId
      }
    });
  }

  createPath( boardArray ) {
    const path = boardArray.map((item, index) => {
      const x = item.col;
      const y = item.row;
      return [x, y];
    });
    return path;
  }

  createPathString( coordinates ) {
    let coords = coordinates.map(xypair => {
      return xypair[0] + ',' + xypair[1];
    });
    coords = coords.join('L');
    coords = 'M' + coords;
    return coords;
  }

}
