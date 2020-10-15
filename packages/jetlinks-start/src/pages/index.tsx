import React from 'react';
import styles from './index.less';
import Network from 'jetlinks-utils';
export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Network />
    </div>
  );
}
