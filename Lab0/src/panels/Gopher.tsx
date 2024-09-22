import { FC } from 'react';
import { NavIdProps, Panel, PanelHeader, PanelHeaderBack, Placeholder } from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import GopherImage from '../assets/gopher.png';

export const Gopher: FC<NavIdProps> = ({ id }) => {
  const routeNavigator = useRouteNavigator();

  return (
    <Panel id={id}>
      <PanelHeader before={<PanelHeaderBack onClick={() => routeNavigator.back()} />}>
        Gopher
      </PanelHeader>
      <Placeholder>
        <img width={230} src={GopherImage} alt="Gopher The gopher" />
      </Placeholder>
    </Panel>
  );
};
