import React from "react";
export default function Counter() {
  const [count, setCount] = React.useState();
  const [loading, setLoading] = React.useState(true);

  const fetch = React.useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setCount(1);
      setLoading(false);
    }, 2000);
  }, []);

  React.useEffect(() => {
    fetch();
  }, [fetch]);
  return (
    <div>
      {!loading ? (
        <div>
          Count: {count}
          <button onClick={() => setCount(pre => pre + 1)}>+</button>
          <button onClick={() => setCount(pre => pre - 1)}>-</button>
          <x-search>test</x-search>
        </div>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
}
