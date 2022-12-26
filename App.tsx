import * as React from 'react';
import { FC } from 'react';
import './style.css';

function Test() {
  return (
    <div>
      <p>test</p>
    </div>
  );
}

const Hoge = () => {
  return (
    <div>
      <p>test</p>
    </div>
  );
};

const Huga: React.FC = () => {
  return (
    <div>
      <p>test</p>
    </div>
  );
};
const HugaHuga: FC = () => {
  return (
    <div>
      <p>test</p>
    </div>
  );
};

type HelloProps = {
  country: String;
};
const Hello = (props: HelloProps) => {
  const { country } = props;
  return (
    <div>
      <p>Hello {country}</p>
    </div>
  );
};

const Apple = (props: { color: String }) => {
  return (
    <div>
      <p>color： {props.color}</p>
    </div>
  );
};

type ChildrenProps = {
  children: React.ReactNode;
};
const Children = (props: ChildrenProps) => {
  return (
    <div>
      <div>{props.children}</div>
    </div>
  );
};

const SpreadAttributes = ({ ...props }) => {
  return <div {...props}>Spread Attributes</div>;
};

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Test />
      <Hoge />
      <Huga />
      <HugaHuga />
      <Hello country={'Japan'} />
      <Apple color={'red'} />
      <Children>
        <p>children</p>
      </Children>
      <SpreadAttributes style={{ color: 'red' }} />
    </div>
  );
}
