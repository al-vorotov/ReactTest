import React from 'react';
import cx from 'classnames';

import './styles.css';

export interface Props {
  user: any[];

  deleteItem(id: number): void;
}

const UserNameList: React.FC<Props> = ({
                                         user,
                                         deleteItem,

                                       }: Props): React.ReactElement => {
  return (
    <>
      <ol className="NameList">
        {user.map((item) => {
          return (
            <li className={cx('NameList__item', { ['NameList__item-active']: item.picked})} key={item.id}>
              <span>
                {item.value}
              </span>
              <i onClick={() => deleteItem(item.id)} className="fas fa-trash-alt NameList__icon"/>
            </li>
          );
        })}
      </ol>
    </>
  );
};

export default React.memo(UserNameList);
