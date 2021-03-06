import { FC } from 'react';
import { ISidebarProps, ISidebarMenuItem } from './type';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useHistory } from 'react-router-dom';

/**
 * Component File Description
 */
const Sidebar: FC<ISidebarProps> = () => {
    const history = useHistory();

    const items: ISidebarMenuItem[] = [
        { title: 'Home', link: '/' },
        { title: 'Form', link: '/form' },
        { title: 'Pie Chart', link: '/pie-chart' },
        { title: 'Bar Chart', link: '/bar-chart' },
        { title: 'Table', link: '/table' },
        { title: 'Progress', link: '/progress' },
        { title: 'Loading', link: '/loading' },
    ];

    return (
        <div className={'sidebar'}>
            <Drawer variant='permanent'>
                <div className={''}>
                    <List>
                        {items.map((item: ISidebarMenuItem, index: number) => {
                            return (
                                <ListItem button key={index} onClick={() => history.push(item.link)}>
                                    <ListItemText primary={item.title} />
                                </ListItem>
                            );
                        })}
                    </List>
                </div>
            </Drawer>
        </div>
    );
};

export default Sidebar;
