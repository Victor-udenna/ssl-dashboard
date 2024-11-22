import React from 'react';
import CustomerListStyle from './CustomerListStyle';
import Text from '../../atom/Text/Text';
import user1 from '../../../assets/images/user1.png';
import user2 from '../../../assets/images/user2.png';
import user3 from '../../../assets/images/user3.png';
import user4 from '../../../assets/images/user4.png';
import user5 from '../../../assets/images/user5.png';
import user6 from '../../../assets/images/user6.png';
import user7 from '../../../assets/images/user7.png';

const customers = [
  { name: 'Ana Black', email: 'ana@gmail.com', avatar: user1 },
  { name: 'George Litz', email: 'georgelitz@gmail.com', avatar: user2 },
  { name: 'John Miller', email: 'jmiller@gmail.com', avatar: user3 },
  { name: 'Jane Jonhson', email: 'jj@gmail.com', avatar: user4 },
  { name: 'Mezei Ágnes', email: 'fefekartika@gmail.com', avatar: user5 },
  { name: 'Katona Beatrix', email: 'edobram@gmail.com', avatar: user6 },
  { name: 'Halász Emese', email: 'jiloputri@yahoo.com', avatar: user7 },
];

const CustomerList = () => {
  return (
    <CustomerListStyle>
      <div className="customer-list">
        <h2 className="title">Customers List</h2>
        <ul className="list">
          {customers.map((customer, index) => (
            <li key={index} className="list-item">
              <img src={customer.avatar} alt={`${customer.name} avatar`} className="avatar" />
              <div className="info">
                <Text className="name" value={customer.name} />
                <Text className="email" value={customer.email} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </CustomerListStyle>
  );
};

export default CustomerList;
