import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";

const codeString = [
  `
import Link from 'next/link'

function Posts({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={\`/blog/\${encodeURIComponent(post.slug)}\`}>
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Posts
`,
  `
  import { useRouter } from 'next/router';

  export default function Home() {
    const router = useRouter();
  
    const handleClick = () => {
      router.push('/about');
    };
  
    return (
      <div>
        <button onClick={handleClick}>
          Go to About
        </button>
      </div>
    );
  }
`,
];

export default function NextStudyPage() {
  return (
    <div className="">
      <h1>Next js 정리</h1>
      <h1>라우팅 처리 방법</h1>
      <ul>
        <li>
          <h2>Link(동적으로 경로 연결)</h2>
          <p>각각의 페이지로 경로를 매핑</p>
          <p>동적으로 경로를 설정하기에 유리함</p>
          <p>URL 객체를 사용하기도 함</p>
          <SyntaxHighlighter
            language="javascript"
            style={okaidia}
            customStyle={{
              maxWidth: "600px",
              maxHeight: "400px",
              overflow: "auto",
              fontSize: "12px",
            }}
          >
            {codeString[0]}
          </SyntaxHighlighter>
          <p>
            사용자가 링크를 클릭할때 경로를 변경하고 페이지를 전환하는데 주로
            사용함
          </p>
          <p>
            next에서 해당 링크를 정적으로 분석할 수 있어 SEO 최적화에 유리함
          </p>
        </li>
        <li>
          <h2>useRouter (라우터 주입)</h2>
          <SyntaxHighlighter
            language="javascript"
            style={okaidia}
            customStyle={{
              maxWidth: "600px",
              maxHeight: "400px",
              overflow: "auto",
              fontSize: "12px",
            }}
          >
            {codeString[1]}
          </SyntaxHighlighter>
          <p>
            사용자가 클릭하지 않고도, 버튼 클릭 이벤트나 조건이 만족될때
            자동으로 경로 변경
          </p>
          <p>
            라우터 정보에 접근, 현재 경로, 쿼리 파라미터, 라우팅 상태등과 같은
            정보를 쉽게 얻을 수 있음
          </p>
          <p>
            현재 페이지의 경로나 파라미터에 따른 다른 처리를 해야 할 때 유리함
          </p>
        </li>
      </ul>
      <p>
        사용자의 상호작용에 따라 동적으로 경로를 변경해야 하는 경우 useRouter를,
        단순히 링크를 통한 페이지 이동이 필요한 경우에는 Link를 사용하는 것이
        적절
      </p>
    </div>
  );
}
