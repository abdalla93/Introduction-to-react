import React from 'react';
import Counter from '@/components/Counter';
import WelcomeMessage from '@/components/WelcomeMessage';
import HardcodedList from '@/components/HardcodedList';
import ItemList from '@/components/ItemList';
import Greeting from '@/components/Greeting';
import ItemListWithCondtion from '@/components/ItemListWithCondtion';
import ParentComponent from '@/components/ParentToChild';
import ChildToParent from '@/components/ChildToParent';
const items = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango'];

export default function Home() {
  return (
    <>
      <main>
        <section className='bg-dark'>
          <div className='flex flex-col items-center justify-center min-h-screen text-white layout'>
            {/* <Counter /> */}
            {/* <WelcomeMessage name='Ahmed' /> */}
            {/* <HardcodedList /> */}
            {/* <ItemList items={items} /> */}
            {/* <Greeting isLoggedIn={false} /> */}
            {/* <ItemListWithCondtion items={items} /> */}
            {/* <ParentComponent /> */}
            <ChildToParent />
          </div>
        </section>
      </main>
    </>
  );
}
