import React from 'react';
import { createStyles, Switch, Group, useMantineColorScheme } from '@mantine/core';
import { Sun, MoonStars } from 'tabler-icons-react';
import { observe } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store/index';

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    '& *': {
      cursor: 'pointer'
    }
  },

  icon: {
    pointerEvents: 'none',
    position: 'absolute',
    zIndex: 1,
    top: 3
  },

  iconLight: {
    left: 4,
    color: theme.white
  },

  iconDark: {
    right: 4,
    color: theme.colors.gray[6]
  }
}));

export const SwitchThemeToggle = observer(() => {
  const { user } = useStore();
  const { classes, cx } = useStyles();

  return (
    <Group>
     
    </Group>
  );
});
