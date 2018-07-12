// This is the Link API
import Link from 'next/link'

const Index = () => (
    <div>
        <Link href="/about">
            <a>About Page</a>
        </Link>
        <br/>
        <Link href="/about">
            <a style={{
                fontSize: 30
            }}>About Page</a>
        </Link>
        <br/>

        <Link href="/about">
            <button>Go to About Page</button>
        </Link>

        <p>Hello Next.js</p>
    </div>
)

export default Index