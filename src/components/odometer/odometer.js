import React, { useState } from "react";
import sleep from "../sleep";

class Digit {
  constructor(starting = 0) {
    this.val = starting;
    this.next = null;
  }
}

class Odometer {
  constructor(digits = 5, starting = 0) {
    this.digits = digits;
    this.dials = new Digit(0);
    let curr_digi = 0;
    let curr_dial = this.dials;
    while (curr_digi < digits - 1) {
      curr_digi++;
      curr_dial.next = new Digit(0);
      curr_dial = curr_dial.next;
    }
  }
  showCurrentDigis() {
    let output = [];
    let current = this.dials;
    while (current) {
      output.push(current.val);
      current = current.next;
    }
    return output;
  }

  reverseOdo() {
    // reverse the ll odometer
    let current = this.dials;
    let last = null;
    let temp;
    while (current.next) {
      temp = current.next;
      current.next = last;
      last = current;
      current = temp;
    }
    current.next = last;
    this.dials = current;
  }

  addSome(num) {
    // first split the incoming integer into an array of integers
    let numArr = num
      .toString()
      .split("")
      .map((str) => parseInt(str))
      .reverse();
    this.reverseOdo();
    let temp = 0;
    let current_digi = this.dials;

    // now its time to do some simple addition
    while (numArr.length) {
      let add = numArr.shift();
      let placeTotal = current_digi.val + add + temp;
      temp = 0;
      if (placeTotal > 9) {
        temp = 1;
        if (!numArr.length) {
          numArr.push(0);
        }
        placeTotal -= 10;
      }
      current_digi.val = placeTotal;
      current_digi = current_digi.next;
    }
    this.reverseOdo();
  }
}
const zeroPad = (num, places) => String(num).padStart(places, "0");

export default (props) => {
  // const [odo, set_odo] = useState(new Odometer());
  // odo.addSome(props.pending)
  // props.setPending(0)
  // let output_str = "";
  // odo.showCurrentDigis().forEach((digi) => {
  //   output_str += digi;
  // });

  // return output_str;
  return <p>{zeroPad(props.odometer, 5)}</p>;
};
