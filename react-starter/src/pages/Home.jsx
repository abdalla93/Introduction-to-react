import React, { useContext } from 'react';
import Counter from '@/components/Counter';
import WelcomeMessage from '@/components/WelcomeMessage';
import HardcodedList from '@/components/HardcodedList';
import ItemList from '@/components/ItemList';
import Greeting from '@/components/Greeting';
import ItemListWithCondtion from '@/components/ItemListWithCondtion';
import ParentComponent from '@/components/ParentToChild';
import ChildToParent from '@/components/ChildToParent';
import Alert from '@/components/Alert';
import Declatative from '@/components/Declarative';
import useDocumentTitle from '@/hooks/useDocumentTitle';
import useRandomNumber from '@/hooks/useRandomNumber';
import PostList from '@/components/PostList';
import CounterWithContext from '@/components/CounterWithContext';
import { CounterContext } from '@/context/CounterProvider';
const items = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango'];

export default function Home() {
  // useDocumentTitle('page 1');
  // const randomNumber = useRandomNumber(3, 150);
  // const { count } = useContext(CounterContext); // Access count from context

  return (
    <>
      <main>
        <section className='bg-dark'>
          <div className='flex flex-col items-center justify-center min-h-screen text-white layout'>
            {/* <WelcomeMessage /> */}
            {/* <Declatative /> */}
            {/* <Counter /> */}
            {/* <HardcodedList /> */}
            {/* <ItemList /> */}
            {/* <Greeting  /> */}
            {/* <ItemListWithCondtion /> */}
            {/* <ParentComponent /> */}
            {/* <ChildToParent /> */}
            {/* <Alert>
              <strong>Error:</strong> Something went wrong!
            </Alert> */}
            {/* <PostList /> */}
            {/* <div>
              <h1>App Count: {count}</h1>
              <CounterWithContext />
            </div> */}
            {/* {randomNumber} */}
          </div>
        </section>
      </main>
    </>
  );
}
