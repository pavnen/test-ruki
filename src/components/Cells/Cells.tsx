import React from 'react'
import {BaseCell} from './BaseCell'
import {EggIcon, FireIcon, ScullIcon} from '../../components'

export const DeadCell: React.FC = () => <BaseCell icon={ScullIcon()} caption="Мертвая" text="или прикидывается" />

export const AlifeCell: React.FC = () => <BaseCell icon={FireIcon()} caption="Живая" text="и шевелится" />

export const NewLifeCell: React.FC = () => <BaseCell icon={EggIcon()} caption="Жизнь" text="ку-ку!" />
