import Image from 'next/image'
import IOITTT from '@/images/logos/IOITTT_logo.svg'

export const Logo = (props: React.ComponentPropsWithoutRef<'svg'>) => {
  return <Image src={IOITTT} alt="IOITTT" width={0} height={0} />
}
