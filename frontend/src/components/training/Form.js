import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Spinner from '../Spinner';
import { breakpoints, colors } from '../../styles';
import Title from '../Title';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC);

const Box = styled.div`
  padding: 50px 0 30px;
`;

const FormContainer = styled.form`
  width: 90%;
  margin: 0 auto;
  padding: 30px 0;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${breakpoints().sm} {
    max-width: 350px;
  }

  @media ${breakpoints().md} {
    max-width: 450px;
  }

  > div:last-of-type {
    width: 100%;
    max-width: 300px;
    margin: 30px auto 0;
    input[type='submit'] {
      outline: none;
      border: none;
      width: 100%;

      background-color: ${colors().violet};
      color: ${colors().grey};
      font-size: 26px;
      font-weight: 700;
      text-align: center;
      text-transform: uppercase;
      padding: 15px;
      border-radius: 12px;
      box-shadow: 0 0 12px -5px ${colors().navy1};
      cursor: pointer;
      transition: all 0.2s;

      @media (hover: hover) {
        &:not(:disabled):hover {
          transform: scale(1.03);
          box-shadow: 0 0 15px -5px ${colors().navy1};
        }
      }

      &:disabled {
        background-color: ${colors(0.5).darkGrey};
        cursor: unset;
      }
    }
  }
`;

const Switch = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px 0;

  > span {
    display: inline-block;
    max-width: 30%;
    color: ${colors().navy1};
    i {
      opacity: ${(props) => (props.toggle ? '1' : '0')};
      color: ${colors().orange};
      transition: all 0.2s;
    }
  }
  label {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    margin-right: 5px;
    input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    span {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 34px;
      background-color: #ccc;
      -webkit-transition: 0.4s;
      transition: 0.4s;

      &::before {
        position: absolute;
        content: '';
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: ${(props) =>
          props.toggle ? `${colors().orange}` : `${colors().violet}`};
        transform: ${(props) =>
          props.toggle ? 'translateX(26px)' : 'translateX(0)'};
        border-radius: 50%;
        -webkit-transition: 0.4s;
        transition: 0.4s;
      }
    }
  }
`;

const Input = styled.div`
  margin: 20px 0;
  height: 50px;
  position: relative;
  display: flex;
  align-items: center;
  input {
    height: 100%;
    width: 100%;
    background-color: transparent;
    border-bottom: 1px solid ${colors().navy2};
    outline: none;

    :focus,
    :valid {
      border-bottom: 2px solid ${colors().orange};
    }

    :focus + label {
      top: 5%;
      font-size: 12px;
      /* transition: all 0.5s; */
    }
    :valid + label {
      top: 5%;
      font-size: 12px;
    }

    :valid ~ i {
      transform: scale(1);
    }
  }

  i {
    transform: scale(0);
    color: ${colors().orange};
    transition: all 0.2s;
  }

  label {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.3s;
  }

  i {
    position: absolute;
    right: 0;
  }
`;

const Privacy = styled.div`
  display: flex;
  align-items: center;
  > input {
    margin-right: 5px;
  }
`;

const SpinnerBtn = styled.div`
  background-color: ${colors().violet};
  color: ${colors().grey};
  font-size: 26px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  padding: 15px;
  border-radius: 12px;
  box-shadow: 0 0 12px -5px ${colors().navy1};
  cursor: pointer;
`;

const validEmailRegex = RegExp(
  // eslint-disable-next-line
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

function Form({ getFromOffset, isMounted }) {
  const [state, setState] = useState({
    name: '',
    address1: '',
    address2: '',
    address3: '',
    email: '',
    nip: '',
    company: '',
    errors: {
      name: '',
      address1: 'Minimum 8 znaków',
      address2: 'Minimum 6 znaków',
      address3: 'Minimum 3 znaki',
      email: 'Nieprawidłowy email',
      nip: 'Minimum 8 znaków',
      company: 'Minimum 3 znaki',
    },
  });
  const [toggle, setToggle] = useState(true);
  const [privacy, setPrivacy] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  // const [hasChanged, setHasChanged] = useState(false);
  const ref = useRef();

  useEffect(() => {
    getFromOffset(ref.current);
  }, [getFromOffset]);
  const handleChange = (e) => {
    setState((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    // setHasChanged(true);

    const { name, value } = e.target;
    let errors = state.errors;

    switch (name) {
      case 'name':
        errors.name = value.length < 5 ? 'Minimum 5 znaków' : '';
        break;
      case 'company':
        errors.company = value.length < 5 ? 'Minimum 3 znaki' : '';
        break;
      case 'email':
        errors.email = validEmailRegex.test(value) ? '' : 'Nieprawidłowy email';
        break;
      case 'address1':
        errors.address1 = value.length < 8 ? 'Minimum 8 znaków' : '';
        break;
      case 'address2':
        errors.address2 = value.length < 5 ? 'Minimum 5 znaków' : '';
        break;
      case 'address3':
        errors.address3 = value.length < 3 ? 'Minimum 3 znaki' : '';
        break;
      case 'nip':
        errors.nip = value.length < 8 ? 'Minimum 8 znaków' : '';
        break;
      default:
        break;
    }
    if (validateForm(state.errors)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false)) &&
      Object.values(state)
        .slice(-1)
        .forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };

  const toggleSwitch = (e) => {
    setToggle((prev) => !prev);
    setState({
      name: '',
      address1: '',
      address2: '',
      address3: '',
      email: '',
      nip: '',
      company: '',
      errors: {
        name: '',
        address1: '',
        address2: '',
        address3: '',
        email: '',
        nip: '',
        company: '',
      },
    });
  };

  const acceptPrivacy = (e) => {
    setPrivacy((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = state;
    delete data.errors;
    console.log(data);
    await axios.all([
      axios.post(`${process.env.REACT_APP_DOMAIN}/api/send-email`, {
        data,
      }),
      axios.get('/api/kup-szkolenie').then(async (data) => {
        const id = await data.data.id;
        const stripe = await stripePromise;
        const { errorStripe } = await stripe.redirectToCheckout({
          sessionId: id,
        });
        console.log(errorStripe);
      }),
    ]);
  };

  return (
    <Box ref={ref}>
      <Title text="Dane kontaktowe" />
      <FormContainer
        onSubmit={handleSubmit}
        // action="/api/kup-szkolenie"
        // method="POST"
      >
        <Switch toggle={toggle}>
          {/* <span>Osoba prywatna</span> */}
          <label>
            <input
              type="checkbox"
              name="switch"
              id="switch"
              onChange={toggleSwitch}
              checked={toggle}
            />
            <span></span>
          </label>
          <span>
            Firma <i className="fa fa-check"></i>
          </span>
        </Switch>
        {toggle ? (
          <Input>
            <input
              type="text"
              name="company"
              id="company"
              value={state.company}
              onChange={handleChange}
              required
            />
            <label htmlFor="company">Nazwa firmy</label>
            <i className="fa fa-check"></i>
          </Input>
        ) : (
          <Input>
            <input
              type="text"
              name="name"
              id="name"
              value={state.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="name">Imię i nazwisko</label>
            <i className="fa fa-check"></i>
          </Input>
        )}
        <Input>
          <input
            type="email"
            name="email"
            id="email"
            value={state.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email</label>
          <i className="fa fa-check"></i>
        </Input>
        <Input>
          <input
            type="text"
            name="address1"
            id="address1"
            value={state.address1}
            onChange={handleChange}
            required
          />
          <label htmlFor="address1">Ulica, nr budynku / nr lokalu</label>
          <i className="fa fa-check"></i>
        </Input>
        <Input>
          <input
            type="text"
            name="address2"
            id="address2"
            value={state.address2}
            onChange={handleChange}
            required
          />
          <label htmlFor="address2">Kod poczowy</label>
          <i className="fa fa-check"></i>
        </Input>
        <Input>
          <input
            type="text"
            name="address3"
            id="address3"
            value={state.address3}
            onChange={handleChange}
            required
          />
          <label htmlFor="address3">Miejscowość</label>
          <i className="fa fa-check"></i>
        </Input>
        {toggle ? (
          <Input>
            <input
              type="number"
              name="nip"
              id="nip"
              value={state.nip}
              onChange={handleChange}
              required
            />
            <label htmlFor="nip">NIP</label>
            <i className="fa fa-check"></i>
          </Input>
        ) : null}
        <Privacy>
          <input
            type="checkbox"
            name="check"
            checked={privacy}
            onChange={acceptPrivacy}
            required
          />
          <label htmlFor="check">
            {' '}
            Kupując szkolenie wyrażam zgodę na przetwarzanie moich danych
            osobowych.Zasady przetwarzania danych osobowych znajdziesz w{' '}
            <Link to="/polityka-prywatnosci">polityce prywatności</Link>.
          </label>
        </Privacy>
        <div>
          {isLoading ? (
            // <Spinner>
            <SpinnerBtn>
              <Spinner bgc={colors().grey} />
            </SpinnerBtn>
          ) : (
            // </Spinner>
            <input type="submit" value="Kupuję i płacę" disabled={disabled} />
          )}
        </div>
      </FormContainer>
    </Box>
  );
}

export default Form;
