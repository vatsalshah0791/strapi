import React from 'react';

import { fireEvent } from '@testing-library/react';
import { render as renderRTL, waitFor } from '@tests/utils';
import { Route, Routes, useLocation } from 'react-router-dom';

import { ListSettingsView } from '../index';

const LocationDisplay = () => {
  const location = useLocation();

  return <span data-testid="location-search">{location.search}</span>;
};

const render = ({
  initialEntries = ['/content-manager/collection-types/api::category.category/configurations/list'],
} = {}) => ({
  ...renderRTL(
    <Routes>
      <Route
        path="/content-manager/:collectionType/:slug/configurations/list"
        element={<ListSettingsView />}
      />
    </Routes>,
    {
      initialEntries,
      renderOptions: {
        wrapper({ children }) {
          return (
            <>
              {children}
              <LocationDisplay />
            </>
          );
        },
      },
    }
  ),
});

describe('CM | LV | Configure the view', () => {
  it('renders and matches the snapshot', async () => {
    const { getByRole } = render();

    await waitFor(() =>
      expect(getByRole('heading', { name: 'Configure the view - Address' })).toBeInTheDocument()
    );

    expect(getByRole('button', { name: 'Save' })).toBeInTheDocument();

    expect(getByRole('heading', { name: 'Settings' })).toBeInTheDocument();
    expect(getByRole('checkbox', { name: 'Enable search' })).toBeInTheDocument();
    expect(getByRole('checkbox', { name: 'Enable filters' })).toBeInTheDocument();
    expect(getByRole('checkbox', { name: 'Enable bulk actions' })).toBeInTheDocument();
    expect(getByRole('combobox', { name: 'Entries per page' })).toBeInTheDocument();
    expect(getByRole('combobox', { name: 'Default sort attribute' })).toBeInTheDocument();
    expect(getByRole('combobox', { name: 'Default sort order' })).toBeInTheDocument();

    expect(getByRole('heading', { name: 'View' })).toBeInTheDocument();

    /**
     * For each attribute it should have the following
     */
    ['id', 'json', 'postal_code'].forEach((attribute) => {
      expect(getByRole('button', { name: `Edit ${attribute}` })).toBeInTheDocument();
      expect(getByRole('button', { name: `Delete ${attribute}` })).toBeInTheDocument();
    });

    expect(getByRole('button', { name: 'Add a field' })).toBeInTheDocument();
  });

  it('should keep plugins query params when arriving on the page and going back', async () => {
    const { getByRole, getByText, user } = render({
      initialEntries: [
        '/content-manager/collection-types/api::category.category/configurations/list?plugins[i18n][locale]=fr',
      ],
    });

    await waitFor(() =>
      expect(getByRole('heading', { name: 'Configure the view - Address' })).toBeInTheDocument()
    );

    expect(getByText('?plugins[i18n][locale]=fr')).toBeInTheDocument();

    await user.click(getByRole('link', { name: 'Back' }));

    expect(
      getByText('?page=1&pageSize=10&sort=id:ASC&plugins[i18n][locale]=fr')
    ).toBeInTheDocument();
  });

  it('should add field', async () => {
    const { getByRole, user } = render();

    await waitFor(() =>
      expect(getByRole('heading', { name: 'Configure the view - Address' })).toBeInTheDocument()
    );

    await user.click(getByRole('button', { name: 'Add a field' }));
    await user.click(getByRole('menuitem', { name: 'slug' }));

    expect(getByRole('button', { name: `Edit slug` })).toBeInTheDocument();
    expect(getByRole('button', { name: `Delete slug` })).toBeInTheDocument();
  });

  describe('Edit modal', () => {
    it('should open edit modal & close upon editing and pressing finish', async () => {
      const { getByRole, queryByRole, user } = render();

      await waitFor(() =>
        expect(getByRole('heading', { name: 'Configure the view - Address' })).toBeInTheDocument()
      );

      await user.click(getByRole('button', { name: 'Edit id' }));

      expect(getByRole('dialog', { name: 'Edit Id' })).toBeInTheDocument();
      expect(getByRole('heading', { name: 'Edit Id' })).toBeInTheDocument();
      expect(getByRole('textbox', { name: 'Label' })).toBeInTheDocument();
      expect(getByRole('checkbox', { name: 'Enable sort on this field' })).toBeInTheDocument();

      await user.type(getByRole('textbox', { name: 'Label' }), 'testname');

      expect(getByRole('button', { name: 'Finish' })).toBeInTheDocument();
      expect(getByRole('button', { name: 'Cancel' })).toBeInTheDocument();

      fireEvent.click(getByRole('button', { name: 'Finish' }));

      expect(queryByRole('dialog', { name: 'Edit Id' })).not.toBeInTheDocument();
    });

    it('should close edit modal when pressing cancel', async () => {
      const { getByRole, queryByRole, user } = render();

      await waitFor(() =>
        expect(getByRole('heading', { name: 'Configure the view - Address' })).toBeInTheDocument()
      );

      await user.click(getByRole('button', { name: 'Edit id' }));

      expect(getByRole('dialog', { name: 'Edit Id' })).toBeInTheDocument();

      await user.click(getByRole('button', { name: 'Cancel' }));

      expect(queryByRole('dialog', { name: 'Edit Id' })).not.toBeInTheDocument();
    });
  });
});
