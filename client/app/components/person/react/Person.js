
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment'

import './person.scss'
import { getPerson } from '../../../redux/actions'

function Person({ id }) {
  const dispatch = useDispatch();
  const personDetail = useSelector(({ persons: { personDetail } }) => personDetail);

  useEffect(() => {
    dispatch(getPerson(id))
  }, []);

  return (
    <div className="person">
      {personDetail &&
        <React.Fragment>
          <div className='avatar'>
            <img src={personDetail.picture.large} alt="" />
          </div>
          <div>
            <ul>
              <li>
                <strong>Name:</strong>&nbsp;
                {personDetail.name.title} {personDetail.name.first} {personDetail.name.last}
              </li>
              <li><strong>ID:</strong> {personDetail.login.uuid}</li>
              <li><strong>Gender:</strong> {personDetail.gender}</li>
              <li><strong>Email:</strong> <a href={personDetail.email}>{personDetail.email}</a></li>
              <li>
                <strong>Location:</strong>
                {personDetail.location.country},&nbsp;
                {personDetail.location.city},&nbsp;
                {personDetail.location.state},&nbsp;
                {personDetail.location.postcode}
              </li>
              <li><strong>DoB:</strong> {moment(personDetail.dob.date).format('MM.DD.YYYY')}</li>
              <li><strong>Registered:</strong> {moment(personDetail.registered.date).format('MM.DD.YYYY')}</li>
              <li><strong>Age:</strong> {personDetail.dob.age}</li>
              <li><strong>Phones:</strong> {personDetail.phone}, {personDetail.cell}</li>
            </ul>
          </div>
        </React.Fragment>
      }
    </div>
  );
}

export default Person;
