"""
    JinaD (Daemon)

    REST interface for managing distributed Jina  # noqa: E501

    The version of the OpenAPI document: 0.9.32
    Generated by: https://openapi-generator.tech
"""


import unittest

import openapi_client
from openapi_client.api.workspaces_api import WorkspacesApi  # noqa: E501


class TestWorkspacesApi(unittest.TestCase):
    """WorkspacesApi unit test stubs"""

    def setUp(self):
        self.api = WorkspacesApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_clear_all_workspaces_delete(self):
        """Test case for clear_all_workspaces_delete

        Deleting all Workspaces  # noqa: E501
        """
        pass

    def test_create_workspaces_post(self):
        """Test case for create_workspaces_post

        Upload files to a workspace  # noqa: E501
        """
        pass

    def test_delete_workspaces_id_delete(self):
        """Test case for delete_workspaces_id_delete

        Deleting an existing Workspace  # noqa: E501
        """
        pass

    def test_get_items_workspaces_get(self):
        """Test case for get_items_workspaces_get

        Get all existing Workspaces' status  # noqa: E501
        """
        pass

    def test_list_workspaces_id_get(self):
        """Test case for list_workspaces_id_get

        Get the status of an existing Workspace  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()
