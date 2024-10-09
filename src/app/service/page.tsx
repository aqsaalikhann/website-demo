import Link from 'next/link';
import style from "../service/service.module.css";

const ServicePage = () => {
  return (
    <div className={style.container}>
      <h1 className={style.header}>service page</h1>
      <ul>
        <li><Link href="/service/digital-marketing">This is digital-marketing page</Link></li>
        <li><Link href="/service/graphic-designing">This is graphic-designing page</Link></li>
      </ul>
        
    </div>
  )
};

export default ServicePage