
import { React, forwardRef } from 'react';

import styles from "./Input.module.sass"

function Input({ value, onChange, ...outrosProps},ref ) {
  return (
    <input className={styles.input} value={value} onChange={onChange}  {...outrosProps}/>
  )
}

export default forwardRef(Input);