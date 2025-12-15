-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3308
-- Generation Time: Dec 15, 2025 at 06:54 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.0.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bitnami_redmine`
--

-- --------------------------------------------------------

--
-- Table structure for table `ar_internal_metadata`
--

CREATE TABLE `ar_internal_metadata` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ar_internal_metadata`
--

INSERT INTO `ar_internal_metadata` (`key`, `value`, `created_at`, `updated_at`) VALUES
('environment', 'production', '2025-12-08 23:21:59.488593', '2025-12-08 23:21:59.488593');

-- --------------------------------------------------------

--
-- Table structure for table `attachments`
--

CREATE TABLE `attachments` (
  `id` int(11) NOT NULL,
  `container_id` int(11) DEFAULT NULL,
  `container_type` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `filename` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `disk_filename` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `filesize` bigint(20) NOT NULL DEFAULT 0,
  `content_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `digest` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `downloads` int(11) NOT NULL DEFAULT 0,
  `author_id` int(11) NOT NULL DEFAULT 0,
  `created_on` timestamp NULL DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `disk_directory` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `auth_sources`
--

CREATE TABLE `auth_sources` (
  `id` int(11) NOT NULL,
  `type` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `name` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `host` varchar(60) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `port` int(11) DEFAULT NULL,
  `account` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `account_password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `base_dn` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `attr_login` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `attr_firstname` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `attr_lastname` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `attr_mail` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `onthefly_register` tinyint(1) NOT NULL DEFAULT 0,
  `tls` tinyint(1) NOT NULL DEFAULT 0,
  `filter` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `timeout` int(11) DEFAULT NULL,
  `verify_peer` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `boards`
--

CREATE TABLE `boards` (
  `id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `position` int(11) DEFAULT NULL,
  `topics_count` int(11) NOT NULL DEFAULT 0,
  `messages_count` int(11) NOT NULL DEFAULT 0,
  `last_message_id` int(11) DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `changes`
--

CREATE TABLE `changes` (
  `id` int(11) NOT NULL,
  `changeset_id` int(11) NOT NULL,
  `action` varchar(1) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `path` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `from_path` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `from_revision` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revision` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `branch` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `changesets`
--

CREATE TABLE `changesets` (
  `id` int(11) NOT NULL,
  `repository_id` int(11) NOT NULL,
  `revision` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `committer` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `committed_on` datetime NOT NULL,
  `comments` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `commit_date` date DEFAULT NULL,
  `scmid` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `changesets_issues`
--

CREATE TABLE `changesets_issues` (
  `changeset_id` int(11) NOT NULL,
  `issue_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `changeset_parents`
--

CREATE TABLE `changeset_parents` (
  `changeset_id` int(11) NOT NULL,
  `parent_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `commented_type` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `commented_id` int(11) NOT NULL DEFAULT 0,
  `author_id` int(11) NOT NULL DEFAULT 0,
  `content` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_on` datetime NOT NULL,
  `updated_on` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `custom_fields`
--

CREATE TABLE `custom_fields` (
  `id` int(11) NOT NULL,
  `type` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `name` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `field_format` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `possible_values` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `regexp` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `min_length` int(11) DEFAULT NULL,
  `max_length` int(11) DEFAULT NULL,
  `is_required` tinyint(1) NOT NULL DEFAULT 0,
  `is_for_all` tinyint(1) NOT NULL DEFAULT 0,
  `is_filter` tinyint(1) NOT NULL DEFAULT 0,
  `position` int(11) DEFAULT NULL,
  `searchable` tinyint(1) DEFAULT 0,
  `default_value` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `editable` tinyint(1) DEFAULT 1,
  `visible` tinyint(1) NOT NULL DEFAULT 1,
  `multiple` tinyint(1) DEFAULT 0,
  `format_store` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `custom_fields_projects`
--

CREATE TABLE `custom_fields_projects` (
  `custom_field_id` int(11) NOT NULL DEFAULT 0,
  `project_id` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `custom_fields_roles`
--

CREATE TABLE `custom_fields_roles` (
  `custom_field_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `custom_fields_trackers`
--

CREATE TABLE `custom_fields_trackers` (
  `custom_field_id` int(11) NOT NULL DEFAULT 0,
  `tracker_id` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `custom_field_enumerations`
--

CREATE TABLE `custom_field_enumerations` (
  `id` int(11) NOT NULL,
  `custom_field_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 1,
  `position` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `custom_values`
--

CREATE TABLE `custom_values` (
  `id` int(11) NOT NULL,
  `customized_type` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `customized_id` int(11) NOT NULL DEFAULT 0,
  `custom_field_id` int(11) NOT NULL DEFAULT 0,
  `value` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `documents`
--

CREATE TABLE `documents` (
  `id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL DEFAULT 0,
  `category_id` int(11) NOT NULL DEFAULT 0,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_on` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `email_addresses`
--

CREATE TABLE `email_addresses` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_default` tinyint(1) NOT NULL DEFAULT 0,
  `notify` tinyint(1) NOT NULL DEFAULT 1,
  `created_on` datetime NOT NULL,
  `updated_on` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `email_addresses`
--

INSERT INTO `email_addresses` (`id`, `user_id`, `address`, `is_default`, `notify`, `created_on`, `updated_on`) VALUES
(1, 1, 'user@example.com', 1, 1, '2025-12-08 23:21:58', '2025-12-08 23:21:58'),
(2, 5, 'quyvo2079@gmail.com', 1, 1, '2025-12-09 07:21:42', '2025-12-09 07:21:42'),
(3, 6, 'minhquan@gmail.com', 1, 1, '2025-12-09 07:22:25', '2025-12-09 07:22:25');

-- --------------------------------------------------------

--
-- Table structure for table `enabled_modules`
--

CREATE TABLE `enabled_modules` (
  `id` int(11) NOT NULL,
  `project_id` int(11) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `enabled_modules`
--

INSERT INTO `enabled_modules` (`id`, `project_id`, `name`) VALUES
(1, 1, 'issue_tracking'),
(2, 1, 'time_tracking'),
(3, 1, 'news'),
(4, 1, 'documents'),
(5, 1, 'files'),
(6, 1, 'wiki'),
(7, 1, 'repository'),
(8, 1, 'boards'),
(9, 1, 'calendar'),
(10, 1, 'gantt');

-- --------------------------------------------------------

--
-- Table structure for table `enumerations`
--

CREATE TABLE `enumerations` (
  `id` int(11) NOT NULL,
  `name` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `position` int(11) DEFAULT NULL,
  `is_default` tinyint(1) NOT NULL DEFAULT 0,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 1,
  `project_id` int(11) DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `position_name` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `enumerations`
--

INSERT INTO `enumerations` (`id`, `name`, `position`, `is_default`, `type`, `active`, `project_id`, `parent_id`, `position_name`) VALUES
(1, 'Low', 1, 0, 'IssuePriority', 1, NULL, NULL, 'lowest'),
(2, 'Normal', 2, 1, 'IssuePriority', 1, NULL, NULL, 'default'),
(3, 'High', 3, 0, 'IssuePriority', 1, NULL, NULL, 'high3'),
(4, 'Urgent', 4, 0, 'IssuePriority', 1, NULL, NULL, 'high2'),
(5, 'Immediate', 5, 0, 'IssuePriority', 1, NULL, NULL, 'highest'),
(6, 'User documentation', 1, 0, 'DocumentCategory', 1, NULL, NULL, NULL),
(7, 'Technical documentation', 2, 0, 'DocumentCategory', 1, NULL, NULL, NULL),
(8, 'Design', 1, 0, 'TimeEntryActivity', 1, NULL, NULL, NULL),
(9, 'Development', 2, 0, 'TimeEntryActivity', 1, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `groups_users`
--

CREATE TABLE `groups_users` (
  `group_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `imports`
--

CREATE TABLE `imports` (
  `id` int(11) NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `filename` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `settings` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `total_items` int(11) DEFAULT NULL,
  `finished` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `imports`
--

INSERT INTO `imports` (`id`, `type`, `user_id`, `filename`, `settings`, `total_items`, `finished`, `created_at`, `updated_at`) VALUES
(1, 'IssueImport', 1, 'e3e94fe2e992d99c229d0c5aa0baab2d', '---\nseparator: \",\"\nwrapper: \"\\\"\"\nencoding: UTF-8\ndate_format: \"%m/%d/%Y\"\nnotifications: \'0\'\nmapping: !ruby/hash:ActiveSupport::HashWithIndifferentAccess\n  project_id: \'1\'\n  tracker: \'0\'\n  status: \'3\'\n  subject: \'1\'\n  description: \'2\'\n  priority: \'4\'\n  category: \'\'\n  assigned_to: \'5\'\n  fixed_version: \'\'\n  is_private: \'\'\n  start_date: \'\'\n  due_date: \'\'\n  estimated_hours: \'\'\n  done_ratio: \'\'\n  unique_id: \'\'\n  parent_issue_id: \'\'\n  relation_duplicates: \'\'\n  relation_duplicated: \'\'\n  relation_blocks: \'\'\n  relation_blocked: \'\'\n  relation_relates: \'\'\n  relation_precedes: \'\'\n  relation_follows: \'\'\n  relation_copied_to: \'\'\n  relation_copied_from: \'\'\n', 7, 1, '2025-12-16 01:40:56', '2025-12-16 01:41:52'),
(2, 'IssueImport', 6, 'cc165eef5c75a854ff9ccb6368f91977', '---\nseparator: \",\"\nwrapper: \"\\\"\"\nencoding: UTF-8\ndate_format: \"%m/%d/%Y\"\nnotifications: \'0\'\nmapping: !ruby/hash:ActiveSupport::HashWithIndifferentAccess\n  project_id: \'1\'\n  tracker: \'0\'\n  status: \'3\'\n  subject: \'1\'\n  description: \'2\'\n  priority: \'4\'\n  category: \'\'\n  assigned_to: \'5\'\n  fixed_version: \'\'\n  is_private: \'\'\n  start_date: \'\'\n  due_date: \'\'\n  estimated_hours: \'\'\n  done_ratio: \'\'\n  unique_id: \'\'\n  parent_issue_id: \'\'\n  relation_duplicates: \'\'\n  relation_duplicated: \'\'\n  relation_blocks: \'\'\n  relation_blocked: \'\'\n  relation_relates: \'\'\n  relation_precedes: \'\'\n  relation_follows: \'\'\n  relation_copied_to: \'\'\n  relation_copied_from: \'\'\n', 7, 1, '2025-12-16 01:46:17', '2025-12-16 01:46:21');

-- --------------------------------------------------------

--
-- Table structure for table `import_items`
--

CREATE TABLE `import_items` (
  `id` int(11) NOT NULL,
  `import_id` int(11) NOT NULL,
  `position` int(11) NOT NULL,
  `obj_id` int(11) DEFAULT NULL,
  `message` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `unique_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `import_items`
--

INSERT INTO `import_items` (`id`, `import_id`, `position`, `obj_id`, `message`, `unique_id`) VALUES
(1, 1, 1, 16, NULL, NULL),
(2, 1, 2, 17, NULL, NULL),
(3, 1, 3, 18, NULL, NULL),
(4, 1, 4, 19, NULL, NULL),
(5, 1, 5, 20, NULL, NULL),
(6, 1, 6, 21, NULL, NULL),
(7, 1, 7, 22, NULL, NULL),
(8, 2, 1, 23, NULL, NULL),
(9, 2, 2, 24, NULL, NULL),
(10, 2, 3, 25, NULL, NULL),
(11, 2, 4, 26, NULL, NULL),
(12, 2, 5, 27, NULL, NULL),
(13, 2, 6, 28, NULL, NULL),
(14, 2, 7, 29, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `issues`
--

CREATE TABLE `issues` (
  `id` int(11) NOT NULL,
  `tracker_id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  `subject` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `description` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `due_date` date DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `status_id` int(11) NOT NULL,
  `assigned_to_id` int(11) DEFAULT NULL,
  `priority_id` int(11) NOT NULL,
  `fixed_version_id` int(11) DEFAULT NULL,
  `author_id` int(11) NOT NULL,
  `lock_version` int(11) NOT NULL DEFAULT 0,
  `created_on` timestamp NULL DEFAULT NULL,
  `updated_on` timestamp NULL DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `done_ratio` int(11) NOT NULL DEFAULT 0,
  `estimated_hours` float DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `root_id` int(11) DEFAULT NULL,
  `lft` int(11) DEFAULT NULL,
  `rgt` int(11) DEFAULT NULL,
  `is_private` tinyint(1) NOT NULL DEFAULT 0,
  `closed_on` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `issues`
--

INSERT INTO `issues` (`id`, `tracker_id`, `project_id`, `subject`, `description`, `due_date`, `category_id`, `status_id`, `assigned_to_id`, `priority_id`, `fixed_version_id`, `author_id`, `lock_version`, `created_on`, `updated_on`, `start_date`, `done_ratio`, `estimated_hours`, `parent_id`, `root_id`, `lft`, `rgt`, `is_private`, `closed_on`) VALUES
(1, 1, 1, 'Không hiển thị hình ảnh trên trang sản phẩm', 'URL bị lỗi: http://localhost:3000/san-pham/ca-thu-phan.\r\n\r\nCác bước tái hiện:\r\n1.	Đăng nhập vào website.\r\n2.	Vào danh mục \"Cá Biển\".\r\n3.	Click chọn sản phẩm \"Cá Thu Phấn\".\r\n4.	Quan sát phần ảnh đại diện sản phẩm.\r\n\r\nKết quả thực tế:\r\n1.	Hình ảnh sản phẩm không hiển thị.\r\n2.	Xuất hiện biểu tượng \"ảnh lỗi\" (broken image icon) hoặc khoảng trắng.\r\n3.	Kiểm tra Console (F12) thấy báo lỗi đỏ: `404 Not Found` cho đường dẫn ảnh.\r\n\r\nKết quả mong đợi:\r\n1.	Hình ảnh sản phẩm hiển thị rõ nét, đúng kích thước, không bị vỡ layout.\r\n\r\nGhi chú thêm:\r\n2.	Các sản phẩm cũ vẫn hiện ảnh bình thường, chỉ sản phẩm mới tạo bị lỗi này.\r\n3.	Nghi ngờ do chưa cấp quyền ghi file vào thư mục `/uploads` trên server.\r\n', '2025-12-10', NULL, 5, 5, 3, 1, 1, 3, '2025-12-09 01:01:55', '2025-12-09 01:14:51', '2025-12-09', 100, 0, NULL, 1, 1, 2, 0, '2025-12-09 08:14:51'),
(23, 1, 1, '[Cart] Nhấn nút +/- số lượng nhưng giá trị không đổi', '1. Mô tả lỗi:\r\nTại màn hình Giỏ hàng, khi người dùng nhấn nút cộng (+) hoặc trừ (-) để thay đổi số lượng sản phẩm, con số hiển thị vẫn giữ nguyên, không tăng giảm, dẫn đến tổng tiền không đổi.\r\n\r\n2. Các bước tái hiện:\r\n- B1: Đăng nhập vào hệ thống với tài khoản Customer.\r\n- B2: Tại trang chủ, chọn một sản phẩm bất kỳ (ví dụ: \"Cá Thu\") và ấn nút \"Thêm vào giỏ\".\r\n- B3: Bấm vào biểu tượng Giỏ hàng ở góc phải màn hình để vào trang Giỏ hàng.\r\n- B4: Tại dòng sản phẩm vừa thêm, tìm nút cộng (+) hoặc trừ (-).\r\n- B5: Click chuột vào nút (+) để tăng số lượng lên 2.\r\n- B6: Quan sát thấy số lượng hiển thị ở giữa vẫn giữ nguyên là 1.\r\n\r\n3. Mong đợi:\r\n- Số lượng sản phẩm thay đổi tương ứng theo thao tác click.\r\n- Tổng tiền đơn hàng được cập nhật lại ngay lập tức.', NULL, NULL, 2, 1, 2, NULL, 6, 2, '2025-12-15 18:46:21', '2025-12-15 18:47:28', NULL, 0, NULL, NULL, 23, 1, 2, 0, NULL),
(24, 1, 1, '[Checkout] Giỏ hàng trống vẫn cho phép thanh toán thành công', '1. Mô tả lỗi:\r\nHệ thống không kiểm tra điều kiện giỏ hàng trước khi thanh toán. Người dùng không có sản phẩm nào vẫn có thể hoàn tất quy trình đặt hàng thành công.\r\n\r\n2. Các bước tái hiện:\r\n- B1: Đăng nhập vào hệ thống.\r\n- B2: Vào trang Giỏ hàng.\r\n- B3: Nếu trong giỏ đang có sản phẩm, thực hiện xóa hết để giỏ hàng trở về trạng thái Trống (0 sản phẩm).\r\n- B4: Kéo xuống dưới, tìm và click vào nút \"Tiến hành thanh toán\" (Checkout).\r\n- B5: Quan sát thấy hệ thống không báo lỗi mà chuyển hướng thẳng sang màn hình thông báo \"Đặt hàng thành công\".\r\n\r\n3. Mong đợi:\r\n- Nút \"Thanh toán\" phải bị vô hiệu hóa (disable) khi giỏ hàng trống.\r\n- Hoặc hiển thị thông báo lỗi (Toast Error): \"Vui lòng thêm sản phẩm trước khi thanh toán\".', NULL, NULL, 1, 5, 3, 1, 6, 2, '2025-12-15 18:46:21', '2025-12-15 18:48:03', NULL, 0, NULL, NULL, 24, 1, 2, 0, NULL),
(25, 1, 1, '[Cart] Thêm sản phẩm thành công nhưng giỏ hàng không hiển thị', '1. Mô tả lỗi:\r\nNgười dùng thực hiện thao tác \"Thêm vào giỏ\", hệ thống thông báo thành công (Toast message). Tuy nhiên, khi truy cập vào trang Giỏ hàng thì danh sách sản phẩm lại trống trơn.\r\n\r\n2. Các bước tái hiện:\r\n- B1: Vào trang \"Danh sách sản phẩm\".\r\n- B2: Chọn sản phẩm (ví dụ: \"Tôm Hùm\") và ấn nút \"Thêm vào giỏ hàng\".\r\n- B3: Chờ hệ thống hiển thị thông báo: \"Thêm sản phẩm thành công\".\r\n- B4: Click ngay vào nút Giỏ hàng trên menu để kiểm tra.\r\n- B5: Quan sát thấy danh sách sản phẩm trong giỏ hàng trống, không có sản phẩm vừa thêm.\r\n\r\n3. Mong đợi:\r\n- Sản phẩm vừa thêm phải xuất hiện đúng trong danh sách giỏ hàng.', NULL, NULL, 1, 1, 3, NULL, 6, 1, '2025-12-15 18:46:21', '2025-12-15 18:46:21', NULL, 0, NULL, NULL, 25, 1, 2, 0, NULL),
(26, 1, 1, '[Security] Lỗi Broken Access Control (Insecure ID Reference)', '1. Mô tả lỗi:\r\nHệ thống sử dụng `userId` từ Body Request do Client gửi lên để cập nhật dữ liệu thay vì lấy từ Token xác thực. Kẻ tấn công có thể giả mạo ID để sửa đổi tài khoản người khác.\r\n\r\n2. Các bước tái hiện (Sử dụng Postman):\r\n- B1: Đăng nhập bằng tài khoản User A (ID: 10) để lấy JWT Token.\r\n- B2: Mở Postman, tạo Request PUT tới API cập nhật user.\r\n- B3: Trong Header, dán Token của User A.\r\n- B4: Trong Body (JSON), nhập thông tin nhưng sửa field `userId` thành ID của User B (ID: 20).\r\n- B5: Gửi Request và kiểm tra Database.\r\n- B6: Quan sát thấy thông tin của User B bị thay đổi dù người gửi là User A.\r\n\r\n3. Mong đợi (Giải pháp):\r\n- Backend phải loại bỏ `userId` khỏi Request Body.\r\n- Thực hiện lấy `userId` trực tiếp từ JWT Token trong Header `Authorization` để đảm bảo chính chủ.', NULL, NULL, 1, 6, 5, 1, 6, 2, '2025-12-15 18:46:21', '2025-12-15 18:48:46', NULL, 0, NULL, NULL, 26, 1, 2, 0, NULL),
(27, 1, 1, '[Search] Kết quả tìm kiếm bị hiển thị trùng lặp (Duplicate)', '1. Mô tả lỗi:\r\nKhi tìm kiếm từ khóa sản phẩm, kết quả trả về hiển thị 2 item giống hệt nhau về thông tin và giá cả.\r\n\r\n2. Các bước tái hiện:\r\n- B1: Vào trang Chủ hoặc trang Sản phẩm.\r\n- B2: Click vào ô Tìm kiếm (Search bar).\r\n- B3: Nhập chính xác từ khóa: \"Cá Hồi\".\r\n- B4: Nhấn Enter.\r\n- B5: Quan sát kết quả trả về hiển thị 2 thẻ sản phẩm đều tên là \"Cá Hồi Phile\" đứng cạnh nhau.\r\n\r\n3. Mong đợi:\r\n- Chỉ hiển thị 1 sản phẩm duy nhất cho mỗi loại trong kết quả tìm kiếm.\r\n- Cần xóa dữ liệu trùng trong Database và thêm ràng buộc Unique.', NULL, NULL, 3, 5, 2, 1, 6, 3, '2025-12-15 18:46:21', '2025-12-15 18:52:47', '2025-12-16', 100, NULL, NULL, 27, 1, 2, 0, NULL),
(28, 1, 1, '[UX/Auth] Nút \"Đăng nhập ngay\" chuyển hướng sai sang trang Home', '1. Mô tả lỗi:\r\nTại màn hình thông báo \"Đăng ký thành công\", nút \"Đăng nhập ngay\" dẫn người dùng vào trang Home thay vì trang Login. Do chưa đăng nhập, người dùng gặp lỗi truy cập.\r\n\r\n2. Các bước tái hiện:\r\n- B1: Mở trình duyệt ẩn danh (để đảm bảo sạch cache/token).\r\n- B2: Vào trang Đăng ký (/register), nhập thông tin hợp lệ và nhấn Đăng ký.\r\n- B3: Khi Popup \"Đăng ký thành công\" hiện ra, click vào nút \"Đăng nhập ngay\".\r\n- B4: Quan sát URL chuyển thành `/home`.\r\n- B5: Quan sát giao diện hiển thị lỗi trắng trang hoặc thông báo 403 Forbidden.\r\n\r\n3. Mong đợi:\r\n- Nút bấm phải điều hướng chính xác về trang `/login` để người dùng đăng nhập.', NULL, NULL, 5, 6, 3, 1, 6, 3, '2025-12-15 18:46:21', '2025-12-15 18:53:36', NULL, 100, NULL, NULL, 28, 1, 2, 0, '2025-12-16 01:53:36'),
(29, 1, 1, '[Frontend] Không load được danh sách đơn hàng (Loading forever)', '1. Mô tả lỗi:\r\nTrang \"Lịch sử đơn hàng\" không hiển thị dữ liệu, biểu tượng loading quay mãi không dừng do gọi sai API.\r\n\r\n2. Các bước tái hiện:\r\n- B1: Đăng nhập vào tài khoản đã từng mua hàng.\r\n- B2: Bấm F12 mở Developer Tools, chọn tab Network.\r\n- B3: Trên web, click vào menu User -> chọn \"Lịch sử đơn hàng\".\r\n- B4: Quan sát trên màn hình thấy biểu tượng Loading quay liên tục.\r\n- B5: Quan sát trong tab Network, tìm request API `order`, thấy trạng thái lỗi 404 Not Found.\r\n\r\n3. Mong đợi:\r\n- Sửa lại endpoint trong code Frontend khớp với Backend (thêm \'s\' vào cuối).\r\n- Danh sách đơn hàng hiển thị đầy đủ dữ liệu.', NULL, NULL, 1, 1, 3, NULL, 6, 1, '2025-12-15 18:46:21', '2025-12-15 18:46:21', NULL, 0, NULL, NULL, 29, 1, 2, 0, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `issue_categories`
--

CREATE TABLE `issue_categories` (
  `id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL DEFAULT 0,
  `name` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `assigned_to_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `issue_relations`
--

CREATE TABLE `issue_relations` (
  `id` int(11) NOT NULL,
  `issue_from_id` int(11) NOT NULL,
  `issue_to_id` int(11) NOT NULL,
  `relation_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `delay` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `issue_statuses`
--

CREATE TABLE `issue_statuses` (
  `id` int(11) NOT NULL,
  `name` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `is_closed` tinyint(1) NOT NULL DEFAULT 0,
  `position` int(11) DEFAULT NULL,
  `default_done_ratio` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `issue_statuses`
--

INSERT INTO `issue_statuses` (`id`, `name`, `is_closed`, `position`, `default_done_ratio`) VALUES
(1, 'New', 0, 1, NULL),
(2, 'In Progress', 0, 2, NULL),
(3, 'Resolved', 0, 3, NULL),
(4, 'Feedback', 0, 4, NULL),
(5, 'Closed', 1, 5, NULL),
(6, 'Rejected', 1, 6, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `journals`
--

CREATE TABLE `journals` (
  `id` int(11) NOT NULL,
  `journalized_id` int(11) NOT NULL DEFAULT 0,
  `journalized_type` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `user_id` int(11) NOT NULL DEFAULT 0,
  `notes` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_on` datetime NOT NULL,
  `private_notes` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `journals`
--

INSERT INTO `journals` (`id`, `journalized_id`, `journalized_type`, `user_id`, `notes`, `created_on`, `private_notes`) VALUES
(1, 1, 'Issue', 5, '', '2025-12-09 08:11:03', 0),
(2, 1, 'Issue', 5, 'Ha Hong Quan Admin wrote:\r\n> URL bị lỗi: http://localhost:3000/san-pham/ca-thu-phan.\r\n> \r\n> Các bước tái hiện:\r\n> 1.	Đăng nhập vào website.\r\n> 2.	Vào danh mục \"Cá Biển\".\r\n> 3.	Click chọn sản phẩm \"Cá Thu Phấn\".\r\n> 4.	Quan sát phần ảnh đại diện sản phẩm.\r\n> \r\n> Kết quả thực tế:\r\n> 1.	Hình ảnh sản phẩm không hiển thị.\r\n> 2.	Xuất hiện biểu tượng \"ảnh lỗi\" (broken image icon) hoặc khoảng trắng.\r\n> 3.	Kiểm tra Console (F12) thấy báo lỗi đỏ: `404 Not Found` cho đường dẫn ảnh.\r\n> \r\n> Kết quả mong đợi:\r\n> 1.	Hình ảnh sản phẩm hiển thị rõ nét, đúng kích thước, không bị vỡ layout.\r\n> \r\n> Ghi chú thêm:\r\n> 2.	Các sản phẩm cũ vẫn hiện ảnh bình thường, chỉ sản phẩm mới tạo bị lỗi này.\r\n> 3.	Nghi ngờ do chưa cấp quyền ghi file vào thư mục `/uploads` trên server.\r\n\r\n', '2025-12-09 08:14:51', 0),
(17, 23, 'Issue', 1, '', '2025-12-16 01:47:28', 0),
(18, 24, 'Issue', 1, '', '2025-12-16 01:48:03', 0),
(19, 26, 'Issue', 1, '', '2025-12-16 01:48:46', 0),
(20, 27, 'Issue', 1, '', '2025-12-16 01:49:20', 0),
(21, 28, 'Issue', 1, 'Sửa đường dẫn liên kết đến trang thay vì /home thì /login', '2025-12-16 01:51:30', 0),
(22, 27, 'Issue', 5, 'Đã fix lỗi do database bị trùng lập dữ liệu, đã thêm UNIQUE để có thể check trùng ', '2025-12-16 01:52:47', 0),
(23, 28, 'Issue', 6, 'Đã kiểm tra, hết lỗi trùng lặp, kết thúc issue.', '2025-12-16 01:53:36', 0);

-- --------------------------------------------------------

--
-- Table structure for table `journal_details`
--

CREATE TABLE `journal_details` (
  `id` int(11) NOT NULL,
  `journal_id` int(11) NOT NULL DEFAULT 0,
  `property` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `prop_key` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `old_value` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `value` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `journal_details`
--

INSERT INTO `journal_details` (`id`, `journal_id`, `property`, `prop_key`, `old_value`, `value`) VALUES
(1, 1, 'attr', 'status_id', '1', '2'),
(2, 1, 'attr', 'done_ratio', '0', '30'),
(3, 2, 'attr', 'status_id', '2', '5'),
(4, 2, 'attr', 'done_ratio', '30', '100'),
(24, 17, 'attr', 'status_id', '1', '2'),
(25, 18, 'attr', 'assigned_to_id', '1', '5'),
(26, 18, 'attr', 'fixed_version_id', NULL, '1'),
(27, 19, 'attr', 'assigned_to_id', '1', '6'),
(28, 19, 'attr', 'fixed_version_id', NULL, '1'),
(29, 20, 'attr', 'assigned_to_id', '1', '5'),
(30, 20, 'attr', 'fixed_version_id', NULL, '1'),
(31, 20, 'attr', 'start_date', NULL, '2025-12-16'),
(32, 21, 'attr', 'status_id', '1', '3'),
(33, 21, 'attr', 'assigned_to_id', '1', '6'),
(34, 21, 'attr', 'fixed_version_id', NULL, '1'),
(35, 21, 'attr', 'done_ratio', '0', '100'),
(36, 22, 'attr', 'status_id', '1', '3'),
(37, 22, 'attr', 'done_ratio', '0', '100'),
(38, 23, 'attr', 'status_id', '3', '5');

-- --------------------------------------------------------

--
-- Table structure for table `members`
--

CREATE TABLE `members` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL DEFAULT 0,
  `project_id` int(11) NOT NULL DEFAULT 0,
  `created_on` timestamp NULL DEFAULT NULL,
  `mail_notification` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `members`
--

INSERT INTO `members` (`id`, `user_id`, `project_id`, `created_on`, `mail_notification`) VALUES
(1, 1, 1, '2025-12-09 00:31:59', 0),
(2, 5, 1, '2025-12-09 00:32:15', 0),
(3, 6, 1, '2025-12-09 00:32:21', 0);

-- --------------------------------------------------------

--
-- Table structure for table `member_roles`
--

CREATE TABLE `member_roles` (
  `id` int(11) NOT NULL,
  `member_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  `inherited_from` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `member_roles`
--

INSERT INTO `member_roles` (`id`, `member_id`, `role_id`, `inherited_from`) VALUES
(1, 1, 3, NULL),
(2, 1, 4, NULL),
(3, 2, 4, NULL),
(5, 3, 4, NULL),
(6, 3, 6, NULL),
(7, 2, 8, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `board_id` int(11) NOT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `subject` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `content` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `author_id` int(11) DEFAULT NULL,
  `replies_count` int(11) NOT NULL DEFAULT 0,
  `last_reply_id` int(11) DEFAULT NULL,
  `created_on` datetime NOT NULL,
  `updated_on` datetime NOT NULL,
  `locked` tinyint(1) DEFAULT 0,
  `sticky` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `project_id` int(11) DEFAULT NULL,
  `title` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `summary` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `author_id` int(11) NOT NULL DEFAULT 0,
  `created_on` timestamp NULL DEFAULT NULL,
  `comments_count` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `homepage` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `is_public` tinyint(1) NOT NULL DEFAULT 1,
  `parent_id` int(11) DEFAULT NULL,
  `created_on` timestamp NULL DEFAULT NULL,
  `updated_on` timestamp NULL DEFAULT NULL,
  `identifier` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `lft` int(11) DEFAULT NULL,
  `rgt` int(11) DEFAULT NULL,
  `inherit_members` tinyint(1) NOT NULL DEFAULT 0,
  `default_version_id` int(11) DEFAULT NULL,
  `default_assigned_to_id` int(11) DEFAULT NULL,
  `default_issue_query_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `name`, `description`, `homepage`, `is_public`, `parent_id`, `created_on`, `updated_on`, `identifier`, `status`, `lft`, `rgt`, `inherit_members`, `default_version_id`, `default_assigned_to_id`, `default_issue_query_id`) VALUES
(1, 'QPQ', 'Đây là trang web thương mại điện tử bán cá chuyên nghiệp.', '', 1, NULL, '2025-12-09 00:20:35', '2025-12-09 00:20:35', 'qpq', 1, 1, 2, 0, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `projects_trackers`
--

CREATE TABLE `projects_trackers` (
  `project_id` int(11) NOT NULL DEFAULT 0,
  `tracker_id` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `projects_trackers`
--

INSERT INTO `projects_trackers` (`project_id`, `tracker_id`) VALUES
(1, 1),
(1, 2),
(1, 3);

-- --------------------------------------------------------

--
-- Table structure for table `queries`
--

CREATE TABLE `queries` (
  `id` int(11) NOT NULL,
  `project_id` int(11) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `filters` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_id` int(11) NOT NULL DEFAULT 0,
  `column_names` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sort_criteria` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `group_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `visibility` int(11) DEFAULT 0,
  `options` text COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `queries`
--

INSERT INTO `queries` (`id`, `project_id`, `name`, `filters`, `user_id`, `column_names`, `sort_criteria`, `group_by`, `type`, `visibility`, `options`) VALUES
(1, NULL, 'Issues assigned to me', '---\nstatus_id:\n  :operator: o\n  :values:\n  - \'\'\nassigned_to_id:\n  :operator: \"=\"\n  :values:\n  - me\nproject.status:\n  :operator: \"=\"\n  :values:\n  - \'1\'\n', 0, NULL, '---\n- - priority\n  - desc\n- - updated_on\n  - desc\n', NULL, 'IssueQuery', 2, NULL),
(2, NULL, 'Reported issues', '---\nstatus_id:\n  :operator: o\n  :values:\n  - \'\'\nauthor_id:\n  :operator: \"=\"\n  :values:\n  - me\nproject.status:\n  :operator: \"=\"\n  :values:\n  - \'1\'\n', 0, NULL, '---\n- - updated_on\n  - desc\n', NULL, 'IssueQuery', 2, NULL),
(3, NULL, 'Updated issues', '---\nstatus_id:\n  :operator: o\n  :values:\n  - \'\'\nupdated_by:\n  :operator: \"=\"\n  :values:\n  - me\nproject.status:\n  :operator: \"=\"\n  :values:\n  - \'1\'\n', 0, NULL, '---\n- - updated_on\n  - desc\n', NULL, 'IssueQuery', 2, NULL),
(4, NULL, 'Watched issues', '---\nstatus_id:\n  :operator: o\n  :values:\n  - \'\'\nwatcher_id:\n  :operator: \"=\"\n  :values:\n  - me\nproject.status:\n  :operator: \"=\"\n  :values:\n  - \'1\'\n', 0, NULL, '---\n- - updated_on\n  - desc\n', NULL, 'IssueQuery', 2, NULL),
(5, NULL, 'My projects', '---\nstatus:\n  :operator: \"=\"\n  :values:\n  - \'1\'\nid:\n  :operator: \"=\"\n  :values:\n  - mine\n', 0, NULL, NULL, NULL, 'ProjectQuery', 2, NULL),
(6, NULL, 'My bookmarks', '---\nstatus:\n  :operator: \"=\"\n  :values:\n  - \'1\'\nid:\n  :operator: \"=\"\n  :values:\n  - bookmarks\n', 0, NULL, NULL, NULL, 'ProjectQuery', 2, NULL),
(7, NULL, 'Spent time', '---\nspent_on:\n  :operator: \"*\"\n  :values:\n  - \'\'\nuser_id:\n  :operator: \"=\"\n  :values:\n  - me\n', 0, NULL, '---\n- - spent_on\n  - desc\n', NULL, 'TimeEntryQuery', 2, '---\n:totalable_names:\n- :hours\n');

-- --------------------------------------------------------

--
-- Table structure for table `queries_roles`
--

CREATE TABLE `queries_roles` (
  `query_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `repositories`
--

CREATE TABLE `repositories` (
  `id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL DEFAULT 0,
  `url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `login` varchar(60) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `root_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `path_encoding` varchar(64) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `log_encoding` varchar(64) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `extra_info` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `identifier` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_default` tinyint(1) DEFAULT 0,
  `created_on` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `position` int(11) DEFAULT NULL,
  `assignable` tinyint(1) DEFAULT 1,
  `builtin` int(11) NOT NULL DEFAULT 0,
  `permissions` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `issues_visibility` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'default',
  `users_visibility` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'all',
  `time_entries_visibility` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'all',
  `all_roles_managed` tinyint(1) NOT NULL DEFAULT 1,
  `settings` text COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `position`, `assignable`, `builtin`, `permissions`, `issues_visibility`, `users_visibility`, `time_entries_visibility`, `all_roles_managed`, `settings`) VALUES
(1, 'Non member', 0, 1, 1, '---\n- :view_issues\n- :add_issues\n- :add_issue_notes\n- :save_queries\n- :view_gantt\n- :view_calendar\n- :view_time_entries\n- :view_news\n- :comment_news\n- :view_documents\n- :view_wiki_pages\n- :view_wiki_edits\n- :view_messages\n- :add_messages\n- :view_files\n- :browse_repository\n- :view_changesets\n', 'default', 'all', 'all', 1, NULL),
(2, 'Anonymous', 0, 1, 2, '---\n- :view_issues\n- :view_gantt\n- :view_calendar\n- :view_time_entries\n- :view_news\n- :view_documents\n- :view_wiki_pages\n- :view_wiki_edits\n- :view_messages\n- :view_files\n- :browse_repository\n- :view_changesets\n', 'default', 'all', 'all', 1, NULL),
(3, 'Manager', 1, 1, 0, '---\n- :add_project\n- :edit_project\n- :close_project\n- :delete_project\n- :select_project_modules\n- :manage_members\n- :manage_versions\n- :add_subprojects\n- :manage_public_queries\n- :save_queries\n- :view_issues\n- :add_issues\n- :edit_issues\n- :edit_own_issues\n- :copy_issues\n- :manage_issue_relations\n- :manage_subtasks\n- :set_issues_private\n- :set_own_issues_private\n- :add_issue_notes\n- :edit_issue_notes\n- :edit_own_issue_notes\n- :view_private_notes\n- :set_notes_private\n- :delete_issues\n- :mention_users\n- :view_issue_watchers\n- :add_issue_watchers\n- :delete_issue_watchers\n- :import_issues\n- :manage_categories\n- :view_time_entries\n- :log_time\n- :edit_time_entries\n- :edit_own_time_entries\n- :manage_project_activities\n- :log_time_for_other_users\n- :import_time_entries\n- :view_news\n- :manage_news\n- :comment_news\n- :view_documents\n- :add_documents\n- :edit_documents\n- :delete_documents\n- :view_files\n- :manage_files\n- :view_wiki_pages\n- :view_wiki_edits\n- :export_wiki_pages\n- :edit_wiki_pages\n- :rename_wiki_pages\n- :delete_wiki_pages\n- :delete_wiki_pages_attachments\n- :view_wiki_page_watchers\n- :add_wiki_page_watchers\n- :delete_wiki_page_watchers\n- :protect_wiki_pages\n- :manage_wiki\n- :view_changesets\n- :browse_repository\n- :commit_access\n- :manage_related_issues\n- :manage_repository\n- :view_messages\n- :add_messages\n- :edit_messages\n- :edit_own_messages\n- :delete_messages\n- :delete_own_messages\n- :view_message_watchers\n- :add_message_watchers\n- :delete_message_watchers\n- :manage_boards\n- :view_calendar\n- :view_gantt\n', 'all', 'all', 'all', 1, NULL),
(4, 'Developer', 2, 1, 0, '---\n- :manage_versions\n- :manage_categories\n- :view_issues\n- :add_issues\n- :edit_issues\n- :view_private_notes\n- :set_notes_private\n- :manage_issue_relations\n- :manage_subtasks\n- :add_issue_notes\n- :save_queries\n- :view_gantt\n- :view_calendar\n- :log_time\n- :view_time_entries\n- :view_news\n- :comment_news\n- :view_documents\n- :view_wiki_pages\n- :view_wiki_edits\n- :edit_wiki_pages\n- :delete_wiki_pages\n- :view_messages\n- :add_messages\n- :edit_own_messages\n- :view_files\n- :manage_files\n- :browse_repository\n- :view_changesets\n- :commit_access\n- :manage_related_issues\n', 'default', 'all', 'all', 1, NULL),
(5, 'Reporter', 3, 1, 0, '---\n- :view_issues\n- :add_issues\n- :add_issue_notes\n- :save_queries\n- :view_gantt\n- :view_calendar\n- :log_time\n- :view_time_entries\n- :view_news\n- :comment_news\n- :view_documents\n- :view_wiki_pages\n- :view_wiki_edits\n- :view_messages\n- :add_messages\n- :edit_own_messages\n- :view_files\n- :browse_repository\n- :view_changesets\n', 'default', 'all', 'all', 1, NULL),
(6, 'Tester', 4, 1, 0, '---\n- :save_queries\n- :view_messages\n- :add_messages\n- :view_calendar\n- :view_documents\n- :view_files\n- :view_gantt\n- :view_issues\n- :add_issues\n- :add_issue_notes\n- :import_issues\n- :view_news\n- :comment_news\n- :view_changesets\n- :browse_repository\n- :view_time_entries\n- :view_wiki_pages\n- :view_wiki_edits\n', 'default', 'all', 'all', 1, '---\npermissions_all_trackers:\n  view_issues: \'1\'\n  add_issues: \'1\'\n  edit_issues: \'1\'\n  add_issue_notes: \'1\'\n  delete_issues: \'1\'\npermissions_tracker_ids:\n  view_issues: []\n  add_issues: []\n  edit_issues: []\n  add_issue_notes: []\n  delete_issues: []\n'),
(8, 'BA', 5, 1, 0, '---\n- :save_queries\n- :view_messages\n- :add_messages\n- :view_calendar\n- :view_documents\n- :view_files\n- :view_gantt\n- :view_issues\n- :add_issues\n- :add_issue_notes\n- :view_news\n- :comment_news\n- :view_changesets\n- :browse_repository\n- :view_time_entries\n- :view_wiki_pages\n- :view_wiki_edits\n', 'default', 'all', 'all', 1, '---\npermissions_all_trackers:\n  view_issues: \'1\'\n  add_issues: \'1\'\n  edit_issues: \'1\'\n  add_issue_notes: \'1\'\n  delete_issues: \'1\'\npermissions_tracker_ids:\n  view_issues: []\n  add_issues: []\n  edit_issues: []\n  add_issue_notes: []\n  delete_issues: []\n');

-- --------------------------------------------------------

--
-- Table structure for table `roles_managed_roles`
--

CREATE TABLE `roles_managed_roles` (
  `role_id` int(11) NOT NULL,
  `managed_role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `schema_migrations`
--

CREATE TABLE `schema_migrations` (
  `version` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `schema_migrations`
--

INSERT INTO `schema_migrations` (`version`) VALUES
('1'),
('10'),
('100'),
('101'),
('102'),
('103'),
('104'),
('105'),
('106'),
('107'),
('108'),
('11'),
('12'),
('13'),
('14'),
('15'),
('16'),
('17'),
('18'),
('19'),
('2'),
('20'),
('20090214190337'),
('20090312172426'),
('20090312194159'),
('20090318181151'),
('20090323224724'),
('20090401221305'),
('20090401231134'),
('20090403001910'),
('20090406161854'),
('20090425161243'),
('20090503121501'),
('20090503121505'),
('20090503121510'),
('20090614091200'),
('20090704172350'),
('20090704172355'),
('20090704172358'),
('20091010093521'),
('20091017212227'),
('20091017212457'),
('20091017212644'),
('20091017212938'),
('20091017213027'),
('20091017213113'),
('20091017213151'),
('20091017213228'),
('20091017213257'),
('20091017213332'),
('20091017213444'),
('20091017213536'),
('20091017213642'),
('20091017213716'),
('20091017213757'),
('20091017213835'),
('20091017213910'),
('20091017214015'),
('20091017214107'),
('20091017214136'),
('20091017214236'),
('20091017214308'),
('20091017214336'),
('20091017214406'),
('20091017214440'),
('20091017214519'),
('20091017214611'),
('20091017214644'),
('20091017214720'),
('20091017214750'),
('20091025163651'),
('20091108092559'),
('20091114105931'),
('20091123212029'),
('20091205124427'),
('20091220183509'),
('20091220183727'),
('20091220184736'),
('20091225164732'),
('20091227112908'),
('20100129193402'),
('20100129193813'),
('20100221100219'),
('20100313132032'),
('20100313171051'),
('20100705164950'),
('20100819172912'),
('20101104182107'),
('20101107130441'),
('20101114115114'),
('20101114115359'),
('20110220160626'),
('20110223180944'),
('20110223180953'),
('20110224000000'),
('20110226120112'),
('20110226120132'),
('20110227125750'),
('20110228000000'),
('20110228000100'),
('20110401192910'),
('20110408103312'),
('20110412065600'),
('20110511000000'),
('20110902000000'),
('20111201201315'),
('20120115143024'),
('20120115143100'),
('20120115143126'),
('20120127174243'),
('20120205111326'),
('20120223110929'),
('20120301153455'),
('20120422150750'),
('20120705074331'),
('20120707064544'),
('20120714122000'),
('20120714122100'),
('20120714122200'),
('20120731164049'),
('20120930112914'),
('20121026002032'),
('20121026003537'),
('20121209123234'),
('20121209123358'),
('20121213084931'),
('20130110122628'),
('20130201184705'),
('20130202090625'),
('20130207175206'),
('20130207181455'),
('20130215073721'),
('20130215111127'),
('20130215111141'),
('20130217094251'),
('20130602092539'),
('20130710182539'),
('20130713104233'),
('20130713111657'),
('20130729070143'),
('20130911193200'),
('20131004113137'),
('20131005100610'),
('20131124175346'),
('20131210180802'),
('20131214094309'),
('20131215104612'),
('20131218183023'),
('20140228130325'),
('20140903143914'),
('20140920094058'),
('20141029181752'),
('20141029181824'),
('20141109112308'),
('20141122124142'),
('20150113194759'),
('20150113211532'),
('20150113213922'),
('20150113213955'),
('20150208105930'),
('20150510083747'),
('20150525103953'),
('20150526183158'),
('20150528084820'),
('20150528092912'),
('20150528093249'),
('20150725112753'),
('20150730122707'),
('20150730122735'),
('20150921204850'),
('20150921210243'),
('20151020182334'),
('20151020182731'),
('20151021184614'),
('20151021185456'),
('20151021190616'),
('20151024082034'),
('20151025072118'),
('20151031095005'),
('20160404080304'),
('20160416072926'),
('20160529063352'),
('20161001122012'),
('20161002133421'),
('20161010081301'),
('20161010081528'),
('20161010081600'),
('20161126094932'),
('20161220091118'),
('20170207050700'),
('20170302015225'),
('20170309214320'),
('20170320051650'),
('20170418090031'),
('20170419144536'),
('20170723112801'),
('20180501132547'),
('20180913072918'),
('20180923082945'),
('20180923091603'),
('20190315094151'),
('20190315102101'),
('20190510070108'),
('20190620135549'),
('20200826153401'),
('20200826153402'),
('20210704125704'),
('20210705111300'),
('20210728131544'),
('20210801145548'),
('20210801211024'),
('20211213122100'),
('20211213122101'),
('20211213122102'),
('20220224194639'),
('21'),
('22'),
('23'),
('24'),
('25'),
('26'),
('27'),
('28'),
('29'),
('3'),
('30'),
('31'),
('32'),
('33'),
('34'),
('35'),
('36'),
('37'),
('38'),
('39'),
('4'),
('40'),
('41'),
('42'),
('43'),
('44'),
('45'),
('46'),
('47'),
('48'),
('49'),
('5'),
('50'),
('51'),
('52'),
('53'),
('54'),
('55'),
('56'),
('57'),
('58'),
('59'),
('6'),
('60'),
('61'),
('62'),
('63'),
('64'),
('65'),
('66'),
('67'),
('68'),
('69'),
('7'),
('70'),
('71'),
('72'),
('73'),
('74'),
('75'),
('76'),
('77'),
('78'),
('79'),
('8'),
('80'),
('81'),
('82'),
('83'),
('84'),
('85'),
('86'),
('87'),
('88'),
('89'),
('9'),
('90'),
('91'),
('92'),
('93'),
('94'),
('95'),
('96'),
('97'),
('98'),
('99');

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `value` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_on` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`id`, `name`, `value`, `updated_on`) VALUES
(1, 'default_projects_tracker_ids', '---\n- \'1\'\n- \'2\'\n- \'3\'\n', '2025-12-08 16:22:04');

-- --------------------------------------------------------

--
-- Table structure for table `time_entries`
--

CREATE TABLE `time_entries` (
  `id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  `author_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `issue_id` int(11) DEFAULT NULL,
  `hours` float NOT NULL,
  `comments` varchar(1024) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `activity_id` int(11) NOT NULL,
  `spent_on` date NOT NULL,
  `tyear` int(11) NOT NULL,
  `tmonth` int(11) NOT NULL,
  `tweek` int(11) NOT NULL,
  `created_on` datetime NOT NULL,
  `updated_on` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `time_entries`
--

INSERT INTO `time_entries` (`id`, `project_id`, `author_id`, `user_id`, `issue_id`, `hours`, `comments`, `activity_id`, `spent_on`, `tyear`, `tmonth`, `tweek`, `created_on`, `updated_on`) VALUES
(1, 1, 5, 5, 1, 2, 'Đã xác nhận đây là lỗi và đang trong quá trình khắc phục lỗi', 9, '2025-12-09', 2025, 12, 50, '2025-12-09 08:11:03', '2025-12-09 08:11:03'),
(2, 1, 5, 5, 1, 2, 'dã hoàn thành việc sửa lỗi', 9, '2025-12-09', 2025, 12, 50, '2025-12-09 08:14:51', '2025-12-09 08:14:51');

-- --------------------------------------------------------

--
-- Table structure for table `tokens`
--

CREATE TABLE `tokens` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL DEFAULT 0,
  `action` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `value` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `created_on` datetime NOT NULL,
  `updated_on` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tokens`
--

INSERT INTO `tokens` (`id`, `user_id`, `action`, `value`, `created_on`, `updated_on`) VALUES
(2, 1, 'feeds', '4c4d4ace0fb3b87ee07ccda61d903009132c4fd5', '2025-12-09 07:19:36', '2025-12-09 00:19:36'),
(4, 5, 'feeds', 'fbffc594c2c5470dc97c80c3c0f1c4dfd51966e6', '2025-12-09 08:08:08', '2025-12-09 01:08:08'),
(7, 1, 'session', '4a78704e8c7581edbdddc1d78af05a97b9e495ad', '2025-12-09 08:15:30', '2025-12-09 01:16:35'),
(8, 1, 'session', '5f25b8b27432e66d22c8255da192861e0430a269', '2025-12-15 20:51:17', '2025-12-15 14:17:22'),
(12, 6, 'feeds', '63e29f18adab1921608bd3b531e19751dc57c17c', '2025-12-16 00:07:32', '2025-12-15 17:07:32'),
(32, 6, 'session', 'f94b1ec2e41eef42222c065c1adc12b99130657d', '2025-12-16 01:52:55', '2025-12-15 18:52:55');

-- --------------------------------------------------------

--
-- Table structure for table `trackers`
--

CREATE TABLE `trackers` (
  `id` int(11) NOT NULL,
  `name` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `position` int(11) DEFAULT NULL,
  `is_in_roadmap` tinyint(1) NOT NULL DEFAULT 1,
  `fields_bits` int(11) DEFAULT 0,
  `default_status_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `trackers`
--

INSERT INTO `trackers` (`id`, `name`, `description`, `position`, `is_in_roadmap`, `fields_bits`, `default_status_id`) VALUES
(1, 'Bug', NULL, 1, 0, 0, 1),
(2, 'Feature', NULL, 2, 1, 0, 1),
(3, 'Support', NULL, 3, 0, 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `login` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `hashed_password` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `firstname` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `lastname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `admin` tinyint(1) NOT NULL DEFAULT 0,
  `status` int(11) NOT NULL DEFAULT 1,
  `last_login_on` datetime DEFAULT NULL,
  `language` varchar(5) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `auth_source_id` int(11) DEFAULT NULL,
  `created_on` timestamp NULL DEFAULT NULL,
  `updated_on` timestamp NULL DEFAULT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mail_notification` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `salt` varchar(64) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `must_change_passwd` tinyint(1) NOT NULL DEFAULT 0,
  `passwd_changed_on` datetime DEFAULT NULL,
  `twofa_scheme` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `twofa_totp_key` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `twofa_totp_last_used_at` int(11) DEFAULT NULL,
  `twofa_required` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `login`, `hashed_password`, `firstname`, `lastname`, `admin`, `status`, `last_login_on`, `language`, `auth_source_id`, `created_on`, `updated_on`, `type`, `mail_notification`, `salt`, `must_change_passwd`, `passwd_changed_on`, `twofa_scheme`, `twofa_totp_key`, `twofa_totp_last_used_at`, `twofa_required`) VALUES
(1, 'quanha', '721465dcf6949fde1099b349f5836f7c1373a7a5', 'Ha Hong Quan', 'Admin', 1, 1, '2025-12-16 01:46:34', 'en', NULL, '2025-12-08 16:21:53', '2025-12-08 16:21:53', 'User', 'all', 'cb907eb11ce403b96294eb7196db5604', 0, NULL, NULL, NULL, NULL, 0),
(2, '', '', '', 'Anonymous users', 0, 1, NULL, '', NULL, '2025-12-08 16:21:58', '2025-12-08 16:21:58', 'GroupAnonymous', '', NULL, 0, NULL, NULL, NULL, NULL, 0),
(3, '', '', '', 'Non member users', 0, 1, NULL, '', NULL, '2025-12-08 16:21:58', '2025-12-08 16:21:58', 'GroupNonMember', '', NULL, 0, NULL, NULL, NULL, NULL, 0),
(4, '', '', '', 'Anonymous', 0, 0, NULL, '', NULL, '2025-12-08 16:22:04', '2025-12-08 16:22:04', 'AnonymousUser', 'only_my_events', NULL, 0, NULL, NULL, NULL, NULL, 0),
(5, 'thienphu', '32f2e22af32393689e441e9465e6dca286484b60', 'Phu', 'Võ Thiên', 0, 1, '2025-12-16 01:51:43', 'en', NULL, '2025-12-09 00:21:42', '2025-12-09 00:21:42', 'User', 'only_my_events', '08f2e66b871821505316fc6ec9a90da4', 0, '2025-12-09 07:21:42', NULL, NULL, NULL, 0),
(6, 'minhquan', '2a12cd55dd803d42e2dac42691817ac9dfa206ea', 'Quân', 'Nguyễn Hồng MInh', 0, 1, '2025-12-16 01:52:55', 'en', NULL, '2025-12-09 00:22:25', '2025-12-09 00:22:25', 'User', 'only_my_events', '3759f28a2b84ab3f5da46cca810e4af8', 0, '2025-12-09 07:22:25', NULL, NULL, NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `user_preferences`
--

CREATE TABLE `user_preferences` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL DEFAULT 0,
  `others` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hide_mail` tinyint(1) DEFAULT 1,
  `time_zone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_preferences`
--

INSERT INTO `user_preferences` (`id`, `user_id`, `others`, `hide_mail`, `time_zone`) VALUES
(1, 1, '---\n:no_self_notified: \'1\'\n:auto_watch_on:\n- issue_contributed_to\n:my_page_layout:\n  left:\n  - issuesassignedtome\n  right:\n  - issuesreportedbyme\n:my_page_settings: {}\n:recently_used_project_ids: \'1\'\n:gantt_zoom: 4\n:gantt_months: 6\n', 1, ''),
(2, 5, '---\n:no_self_notified: \'1\'\n:auto_watch_on:\n- \'\'\n- issue_contributed_to\n:notify_about_high_priority_issues: \'0\'\n:comments_sorting: asc\n:warn_on_leaving_unsaved: \'1\'\n:textarea_font: \'\'\n:recently_used_projects: 3\n:history_default_tab: notes\n:toolbar_language_options: c,cpp,csharp,css,diff,go,groovy,html,java,javascript,objc,perl,php,python,r,ruby,sass,scala,shell,sql,swift,xml,yaml\n:default_issue_query: \'\'\n:default_project_query: \'\'\n:my_page_layout:\n  left:\n  - issuesassignedtome\n  right:\n  - issuesreportedbyme\n:my_page_settings: {}\n:recently_used_project_ids: \'1\'\n:gantt_zoom: 2\n:gantt_months: 6\n', 1, ''),
(3, 6, '---\n:no_self_notified: \'1\'\n:auto_watch_on:\n- \'\'\n- issue_contributed_to\n:notify_about_high_priority_issues: \'0\'\n:comments_sorting: asc\n:warn_on_leaving_unsaved: \'1\'\n:textarea_font: \'\'\n:recently_used_projects: 3\n:history_default_tab: notes\n:toolbar_language_options: c,cpp,csharp,css,diff,go,groovy,html,java,javascript,objc,perl,php,python,r,ruby,sass,scala,shell,sql,swift,xml,yaml\n:default_issue_query: \'\'\n:default_project_query: \'\'\n:my_page_layout:\n  left:\n  - issuesassignedtome\n  right:\n  - issuesreportedbyme\n:my_page_settings: {}\n:recently_used_project_ids: \'1\'\n:gantt_zoom: 2\n:gantt_months: 6\n', 1, '');

-- --------------------------------------------------------

--
-- Table structure for table `versions`
--

CREATE TABLE `versions` (
  `id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL DEFAULT 0,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `effective_date` date DEFAULT NULL,
  `created_on` timestamp NULL DEFAULT NULL,
  `updated_on` timestamp NULL DEFAULT NULL,
  `wiki_page_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT 'open',
  `sharing` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'none'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `versions`
--

INSERT INTO `versions` (`id`, `project_id`, `name`, `description`, `effective_date`, `created_on`, `updated_on`, `wiki_page_title`, `status`, `sharing`) VALUES
(1, 1, '1.0', '', '2025-12-09', '2025-12-09 00:33:37', '2025-12-09 00:33:37', '', 'open', 'system');

-- --------------------------------------------------------

--
-- Table structure for table `watchers`
--

CREATE TABLE `watchers` (
  `id` int(11) NOT NULL,
  `watchable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `watchable_id` int(11) NOT NULL DEFAULT 0,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `watchers`
--

INSERT INTO `watchers` (`id`, `watchable_type`, `watchable_id`, `user_id`) VALUES
(1, 'Issue', 1, 5),
(5, 'Issue', 23, 1),
(6, 'Issue', 24, 1),
(7, 'Issue', 26, 1),
(8, 'Issue', 27, 1),
(9, 'Issue', 28, 1);

-- --------------------------------------------------------

--
-- Table structure for table `wikis`
--

CREATE TABLE `wikis` (
  `id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  `start_page` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `wikis`
--

INSERT INTO `wikis` (`id`, `project_id`, `start_page`, `status`) VALUES
(1, 1, 'Wiki', 1);

-- --------------------------------------------------------

--
-- Table structure for table `wiki_contents`
--

CREATE TABLE `wiki_contents` (
  `id` int(11) NOT NULL,
  `page_id` int(11) NOT NULL,
  `author_id` int(11) DEFAULT NULL,
  `text` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `comments` varchar(1024) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `updated_on` datetime NOT NULL,
  `version` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `wiki_content_versions`
--

CREATE TABLE `wiki_content_versions` (
  `id` int(11) NOT NULL,
  `wiki_content_id` int(11) NOT NULL,
  `page_id` int(11) NOT NULL,
  `author_id` int(11) DEFAULT NULL,
  `data` longblob DEFAULT NULL,
  `compression` varchar(6) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `comments` varchar(1024) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `updated_on` datetime NOT NULL,
  `version` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `wiki_pages`
--

CREATE TABLE `wiki_pages` (
  `id` int(11) NOT NULL,
  `wiki_id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_on` datetime NOT NULL,
  `protected` tinyint(1) NOT NULL DEFAULT 0,
  `parent_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `wiki_redirects`
--

CREATE TABLE `wiki_redirects` (
  `id` int(11) NOT NULL,
  `wiki_id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirects_to` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_on` datetime NOT NULL,
  `redirects_to_wiki_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `workflows`
--

CREATE TABLE `workflows` (
  `id` int(11) NOT NULL,
  `tracker_id` int(11) NOT NULL DEFAULT 0,
  `old_status_id` int(11) NOT NULL DEFAULT 0,
  `new_status_id` int(11) NOT NULL DEFAULT 0,
  `role_id` int(11) NOT NULL DEFAULT 0,
  `assignee` tinyint(1) NOT NULL DEFAULT 0,
  `author` tinyint(1) NOT NULL DEFAULT 0,
  `type` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `field_name` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rule` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `workflows`
--

INSERT INTO `workflows` (`id`, `tracker_id`, `old_status_id`, `new_status_id`, `role_id`, `assignee`, `author`, `type`, `field_name`, `rule`) VALUES
(1, 1, 1, 2, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(2, 1, 1, 3, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(3, 1, 1, 4, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(4, 1, 1, 5, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(5, 1, 1, 6, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(6, 1, 2, 1, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(7, 1, 2, 3, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(8, 1, 2, 4, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(9, 1, 2, 5, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(10, 1, 2, 6, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(11, 1, 3, 1, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(12, 1, 3, 2, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(13, 1, 3, 4, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(14, 1, 3, 5, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(15, 1, 3, 6, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(16, 1, 4, 1, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(17, 1, 4, 2, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(18, 1, 4, 3, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(19, 1, 4, 5, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(20, 1, 4, 6, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(21, 1, 5, 1, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(22, 1, 5, 2, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(23, 1, 5, 3, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(24, 1, 5, 4, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(25, 1, 5, 6, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(26, 1, 6, 1, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(27, 1, 6, 2, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(28, 1, 6, 3, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(29, 1, 6, 4, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(30, 1, 6, 5, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(31, 2, 1, 2, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(32, 2, 1, 3, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(33, 2, 1, 4, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(34, 2, 1, 5, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(35, 2, 1, 6, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(36, 2, 2, 1, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(37, 2, 2, 3, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(38, 2, 2, 4, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(39, 2, 2, 5, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(40, 2, 2, 6, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(41, 2, 3, 1, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(42, 2, 3, 2, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(43, 2, 3, 4, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(44, 2, 3, 5, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(45, 2, 3, 6, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(46, 2, 4, 1, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(47, 2, 4, 2, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(48, 2, 4, 3, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(49, 2, 4, 5, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(50, 2, 4, 6, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(51, 2, 5, 1, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(52, 2, 5, 2, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(53, 2, 5, 3, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(54, 2, 5, 4, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(55, 2, 5, 6, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(56, 2, 6, 1, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(57, 2, 6, 2, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(58, 2, 6, 3, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(59, 2, 6, 4, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(60, 2, 6, 5, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(61, 3, 1, 2, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(62, 3, 1, 3, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(63, 3, 1, 4, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(64, 3, 1, 5, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(65, 3, 1, 6, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(66, 3, 2, 1, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(67, 3, 2, 3, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(68, 3, 2, 4, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(69, 3, 2, 5, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(70, 3, 2, 6, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(71, 3, 3, 1, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(72, 3, 3, 2, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(73, 3, 3, 4, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(74, 3, 3, 5, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(75, 3, 3, 6, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(76, 3, 4, 1, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(77, 3, 4, 2, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(78, 3, 4, 3, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(79, 3, 4, 5, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(80, 3, 4, 6, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(81, 3, 5, 1, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(82, 3, 5, 2, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(83, 3, 5, 3, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(84, 3, 5, 4, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(85, 3, 5, 6, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(86, 3, 6, 1, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(87, 3, 6, 2, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(88, 3, 6, 3, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(89, 3, 6, 4, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(90, 3, 6, 5, 3, 0, 0, 'WorkflowTransition', NULL, NULL),
(91, 1, 1, 2, 4, 0, 0, 'WorkflowTransition', NULL, NULL),
(92, 1, 1, 3, 4, 0, 0, 'WorkflowTransition', NULL, NULL),
(93, 1, 1, 4, 4, 0, 0, 'WorkflowTransition', NULL, NULL),
(94, 1, 1, 5, 4, 0, 0, 'WorkflowTransition', NULL, NULL),
(95, 1, 2, 3, 4, 0, 0, 'WorkflowTransition', NULL, NULL),
(96, 1, 2, 4, 4, 0, 0, 'WorkflowTransition', NULL, NULL),
(97, 1, 2, 5, 4, 0, 0, 'WorkflowTransition', NULL, NULL),
(98, 1, 3, 2, 4, 0, 0, 'WorkflowTransition', NULL, NULL),
(99, 1, 3, 4, 4, 0, 0, 'WorkflowTransition', NULL, NULL),
(100, 1, 3, 5, 4, 0, 0, 'WorkflowTransition', NULL, NULL),
(101, 1, 4, 2, 4, 0, 0, 'WorkflowTransition', NULL, NULL),
(102, 1, 4, 3, 4, 0, 0, 'WorkflowTransition', NULL, NULL),
(103, 1, 4, 5, 4, 0, 0, 'WorkflowTransition', NULL, NULL),
(104, 2, 1, 2, 4, 0, 0, 'WorkflowTransition', NULL, NULL),
(105, 2, 1, 3, 4, 0, 0, 'WorkflowTransition', NULL, NULL),
(106, 2, 1, 4, 4, 0, 0, 'WorkflowTransition', NULL, NULL),
(107, 2, 1, 5, 4, 0, 0, 'WorkflowTransition', NULL, NULL),
(108, 2, 2, 3, 4, 0, 0, 'WorkflowTransition', NULL, NULL),
(109, 2, 2, 4, 4, 0, 0, 'WorkflowTransition', NULL, NULL),
(110, 2, 2, 5, 4, 0, 0, 'WorkflowTransition', NULL, NULL),
(111, 2, 3, 2, 4, 0, 0, 'WorkflowTransition', NULL, NULL),
(112, 2, 3, 4, 4, 0, 0, 'WorkflowTransition', NULL, NULL),
(113, 2, 3, 5, 4, 0, 0, 'WorkflowTransition', NULL, NULL),
(114, 2, 4, 2, 4, 0, 0, 'WorkflowTransition', NULL, NULL),
(115, 2, 4, 3, 4, 0, 0, 'WorkflowTransition', NULL, NULL),
(116, 2, 4, 5, 4, 0, 0, 'WorkflowTransition', NULL, NULL),
(117, 3, 1, 2, 4, 0, 0, 'WorkflowTransition', NULL, NULL),
(118, 3, 1, 3, 4, 0, 0, 'WorkflowTransition', NULL, NULL),
(119, 3, 1, 4, 4, 0, 0, 'WorkflowTransition', NULL, NULL),
(120, 3, 1, 5, 4, 0, 0, 'WorkflowTransition', NULL, NULL),
(121, 3, 2, 3, 4, 0, 0, 'WorkflowTransition', NULL, NULL),
(122, 3, 2, 4, 4, 0, 0, 'WorkflowTransition', NULL, NULL),
(123, 3, 2, 5, 4, 0, 0, 'WorkflowTransition', NULL, NULL),
(124, 3, 3, 2, 4, 0, 0, 'WorkflowTransition', NULL, NULL),
(125, 3, 3, 4, 4, 0, 0, 'WorkflowTransition', NULL, NULL),
(126, 3, 3, 5, 4, 0, 0, 'WorkflowTransition', NULL, NULL),
(127, 3, 4, 2, 4, 0, 0, 'WorkflowTransition', NULL, NULL),
(128, 3, 4, 3, 4, 0, 0, 'WorkflowTransition', NULL, NULL),
(129, 3, 4, 5, 4, 0, 0, 'WorkflowTransition', NULL, NULL),
(130, 1, 1, 5, 5, 0, 0, 'WorkflowTransition', NULL, NULL),
(131, 1, 2, 5, 5, 0, 0, 'WorkflowTransition', NULL, NULL),
(132, 1, 3, 5, 5, 0, 0, 'WorkflowTransition', NULL, NULL),
(133, 1, 4, 5, 5, 0, 0, 'WorkflowTransition', NULL, NULL),
(134, 1, 3, 4, 5, 0, 0, 'WorkflowTransition', NULL, NULL),
(135, 2, 1, 5, 5, 0, 0, 'WorkflowTransition', NULL, NULL),
(136, 2, 2, 5, 5, 0, 0, 'WorkflowTransition', NULL, NULL),
(137, 2, 3, 5, 5, 0, 0, 'WorkflowTransition', NULL, NULL),
(138, 2, 4, 5, 5, 0, 0, 'WorkflowTransition', NULL, NULL),
(139, 2, 3, 4, 5, 0, 0, 'WorkflowTransition', NULL, NULL),
(140, 3, 1, 5, 5, 0, 0, 'WorkflowTransition', NULL, NULL),
(141, 3, 2, 5, 5, 0, 0, 'WorkflowTransition', NULL, NULL),
(142, 3, 3, 5, 5, 0, 0, 'WorkflowTransition', NULL, NULL),
(143, 3, 4, 5, 5, 0, 0, 'WorkflowTransition', NULL, NULL),
(144, 3, 3, 4, 5, 0, 0, 'WorkflowTransition', NULL, NULL),
(146, 1, 3, 5, 6, 0, 0, 'WorkflowTransition', NULL, NULL),
(153, 1, 3, 2, 6, 0, 0, 'WorkflowTransition', NULL, NULL),
(154, 1, 5, 1, 6, 0, 0, 'WorkflowTransition', NULL, NULL),
(155, 1, 0, 1, 8, 0, 0, 'WorkflowTransition', NULL, NULL),
(156, 1, 1, 2, 8, 0, 0, 'WorkflowTransition', NULL, NULL),
(157, 1, 1, 6, 8, 0, 0, 'WorkflowTransition', NULL, NULL),
(158, 1, 3, 1, 8, 0, 0, 'WorkflowTransition', NULL, NULL),
(159, 1, 3, 4, 8, 0, 0, 'WorkflowTransition', NULL, NULL),
(160, 1, 3, 5, 8, 0, 0, 'WorkflowTransition', NULL, NULL),
(161, 1, 4, 1, 8, 0, 0, 'WorkflowTransition', NULL, NULL),
(162, 1, 4, 2, 8, 0, 0, 'WorkflowTransition', NULL, NULL),
(163, 1, 5, 1, 8, 0, 0, 'WorkflowTransition', NULL, NULL),
(164, 1, 5, 2, 8, 0, 0, 'WorkflowTransition', NULL, NULL),
(165, 1, 6, 1, 8, 0, 0, 'WorkflowTransition', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ar_internal_metadata`
--
ALTER TABLE `ar_internal_metadata`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `attachments`
--
ALTER TABLE `attachments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `index_attachments_on_author_id` (`author_id`),
  ADD KEY `index_attachments_on_created_on` (`created_on`),
  ADD KEY `index_attachments_on_container_id_and_container_type` (`container_id`,`container_type`),
  ADD KEY `index_attachments_on_disk_filename` (`disk_filename`);

--
-- Indexes for table `auth_sources`
--
ALTER TABLE `auth_sources`
  ADD PRIMARY KEY (`id`),
  ADD KEY `index_auth_sources_on_id_and_type` (`id`,`type`);

--
-- Indexes for table `boards`
--
ALTER TABLE `boards`
  ADD PRIMARY KEY (`id`),
  ADD KEY `boards_project_id` (`project_id`),
  ADD KEY `index_boards_on_last_message_id` (`last_message_id`);

--
-- Indexes for table `changes`
--
ALTER TABLE `changes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `changesets_changeset_id` (`changeset_id`);

--
-- Indexes for table `changesets`
--
ALTER TABLE `changesets`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `changesets_repos_rev` (`repository_id`,`revision`),
  ADD KEY `index_changesets_on_user_id` (`user_id`),
  ADD KEY `index_changesets_on_repository_id` (`repository_id`),
  ADD KEY `index_changesets_on_committed_on` (`committed_on`),
  ADD KEY `changesets_repos_scmid` (`repository_id`,`scmid`);

--
-- Indexes for table `changesets_issues`
--
ALTER TABLE `changesets_issues`
  ADD UNIQUE KEY `changesets_issues_ids` (`changeset_id`,`issue_id`),
  ADD KEY `index_changesets_issues_on_issue_id` (`issue_id`);

--
-- Indexes for table `changeset_parents`
--
ALTER TABLE `changeset_parents`
  ADD KEY `changeset_parents_changeset_ids` (`changeset_id`),
  ADD KEY `changeset_parents_parent_ids` (`parent_id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `index_comments_on_commented_id_and_commented_type` (`commented_id`,`commented_type`),
  ADD KEY `index_comments_on_author_id` (`author_id`);

--
-- Indexes for table `custom_fields`
--
ALTER TABLE `custom_fields`
  ADD PRIMARY KEY (`id`),
  ADD KEY `index_custom_fields_on_id_and_type` (`id`,`type`);

--
-- Indexes for table `custom_fields_projects`
--
ALTER TABLE `custom_fields_projects`
  ADD UNIQUE KEY `index_custom_fields_projects_on_custom_field_id_and_project_id` (`custom_field_id`,`project_id`);

--
-- Indexes for table `custom_fields_roles`
--
ALTER TABLE `custom_fields_roles`
  ADD UNIQUE KEY `custom_fields_roles_ids` (`custom_field_id`,`role_id`);

--
-- Indexes for table `custom_fields_trackers`
--
ALTER TABLE `custom_fields_trackers`
  ADD UNIQUE KEY `index_custom_fields_trackers_on_custom_field_id_and_tracker_id` (`custom_field_id`,`tracker_id`);

--
-- Indexes for table `custom_field_enumerations`
--
ALTER TABLE `custom_field_enumerations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `custom_values`
--
ALTER TABLE `custom_values`
  ADD PRIMARY KEY (`id`),
  ADD KEY `custom_values_customized` (`customized_type`,`customized_id`),
  ADD KEY `index_custom_values_on_custom_field_id` (`custom_field_id`);

--
-- Indexes for table `documents`
--
ALTER TABLE `documents`
  ADD PRIMARY KEY (`id`),
  ADD KEY `documents_project_id` (`project_id`),
  ADD KEY `index_documents_on_category_id` (`category_id`),
  ADD KEY `index_documents_on_created_on` (`created_on`);

--
-- Indexes for table `email_addresses`
--
ALTER TABLE `email_addresses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `index_email_addresses_on_user_id` (`user_id`);

--
-- Indexes for table `enabled_modules`
--
ALTER TABLE `enabled_modules`
  ADD PRIMARY KEY (`id`),
  ADD KEY `enabled_modules_project_id` (`project_id`);

--
-- Indexes for table `enumerations`
--
ALTER TABLE `enumerations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `index_enumerations_on_project_id` (`project_id`),
  ADD KEY `index_enumerations_on_id_and_type` (`id`,`type`);

--
-- Indexes for table `groups_users`
--
ALTER TABLE `groups_users`
  ADD UNIQUE KEY `groups_users_ids` (`group_id`,`user_id`);

--
-- Indexes for table `imports`
--
ALTER TABLE `imports`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `import_items`
--
ALTER TABLE `import_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `index_import_items_on_import_id_and_unique_id` (`import_id`,`unique_id`);

--
-- Indexes for table `issues`
--
ALTER TABLE `issues`
  ADD PRIMARY KEY (`id`),
  ADD KEY `issues_project_id` (`project_id`),
  ADD KEY `index_issues_on_status_id` (`status_id`),
  ADD KEY `index_issues_on_category_id` (`category_id`),
  ADD KEY `index_issues_on_assigned_to_id` (`assigned_to_id`),
  ADD KEY `index_issues_on_fixed_version_id` (`fixed_version_id`),
  ADD KEY `index_issues_on_tracker_id` (`tracker_id`),
  ADD KEY `index_issues_on_priority_id` (`priority_id`),
  ADD KEY `index_issues_on_author_id` (`author_id`),
  ADD KEY `index_issues_on_created_on` (`created_on`),
  ADD KEY `index_issues_on_root_id_and_lft_and_rgt` (`root_id`,`lft`,`rgt`),
  ADD KEY `index_issues_on_parent_id` (`parent_id`);

--
-- Indexes for table `issue_categories`
--
ALTER TABLE `issue_categories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `issue_categories_project_id` (`project_id`),
  ADD KEY `index_issue_categories_on_assigned_to_id` (`assigned_to_id`);

--
-- Indexes for table `issue_relations`
--
ALTER TABLE `issue_relations`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `index_issue_relations_on_issue_from_id_and_issue_to_id` (`issue_from_id`,`issue_to_id`),
  ADD KEY `index_issue_relations_on_issue_from_id` (`issue_from_id`),
  ADD KEY `index_issue_relations_on_issue_to_id` (`issue_to_id`);

--
-- Indexes for table `issue_statuses`
--
ALTER TABLE `issue_statuses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `index_issue_statuses_on_position` (`position`),
  ADD KEY `index_issue_statuses_on_is_closed` (`is_closed`);

--
-- Indexes for table `journals`
--
ALTER TABLE `journals`
  ADD PRIMARY KEY (`id`),
  ADD KEY `journals_journalized_id` (`journalized_id`,`journalized_type`),
  ADD KEY `index_journals_on_user_id` (`user_id`),
  ADD KEY `index_journals_on_journalized_id` (`journalized_id`),
  ADD KEY `index_journals_on_created_on` (`created_on`);

--
-- Indexes for table `journal_details`
--
ALTER TABLE `journal_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `journal_details_journal_id` (`journal_id`);

--
-- Indexes for table `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `index_members_on_user_id_and_project_id` (`user_id`,`project_id`),
  ADD KEY `index_members_on_user_id` (`user_id`),
  ADD KEY `index_members_on_project_id` (`project_id`);

--
-- Indexes for table `member_roles`
--
ALTER TABLE `member_roles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `index_member_roles_on_member_id` (`member_id`),
  ADD KEY `index_member_roles_on_role_id` (`role_id`),
  ADD KEY `index_member_roles_on_inherited_from` (`inherited_from`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `messages_board_id` (`board_id`),
  ADD KEY `messages_parent_id` (`parent_id`),
  ADD KEY `index_messages_on_last_reply_id` (`last_reply_id`),
  ADD KEY `index_messages_on_author_id` (`author_id`),
  ADD KEY `index_messages_on_created_on` (`created_on`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`),
  ADD KEY `news_project_id` (`project_id`),
  ADD KEY `index_news_on_author_id` (`author_id`),
  ADD KEY `index_news_on_created_on` (`created_on`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`),
  ADD KEY `index_projects_on_lft` (`lft`),
  ADD KEY `index_projects_on_rgt` (`rgt`);

--
-- Indexes for table `projects_trackers`
--
ALTER TABLE `projects_trackers`
  ADD UNIQUE KEY `projects_trackers_unique` (`project_id`,`tracker_id`),
  ADD KEY `projects_trackers_project_id` (`project_id`);

--
-- Indexes for table `queries`
--
ALTER TABLE `queries`
  ADD PRIMARY KEY (`id`),
  ADD KEY `index_queries_on_project_id` (`project_id`),
  ADD KEY `index_queries_on_user_id` (`user_id`);

--
-- Indexes for table `queries_roles`
--
ALTER TABLE `queries_roles`
  ADD UNIQUE KEY `queries_roles_ids` (`query_id`,`role_id`);

--
-- Indexes for table `repositories`
--
ALTER TABLE `repositories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `index_repositories_on_project_id` (`project_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles_managed_roles`
--
ALTER TABLE `roles_managed_roles`
  ADD UNIQUE KEY `index_roles_managed_roles_on_role_id_and_managed_role_id` (`role_id`,`managed_role_id`);

--
-- Indexes for table `schema_migrations`
--
ALTER TABLE `schema_migrations`
  ADD PRIMARY KEY (`version`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `index_settings_on_name` (`name`);

--
-- Indexes for table `time_entries`
--
ALTER TABLE `time_entries`
  ADD PRIMARY KEY (`id`),
  ADD KEY `time_entries_project_id` (`project_id`),
  ADD KEY `time_entries_issue_id` (`issue_id`),
  ADD KEY `index_time_entries_on_activity_id` (`activity_id`),
  ADD KEY `index_time_entries_on_user_id` (`user_id`),
  ADD KEY `index_time_entries_on_created_on` (`created_on`);

--
-- Indexes for table `tokens`
--
ALTER TABLE `tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `tokens_value` (`value`),
  ADD KEY `index_tokens_on_user_id` (`user_id`);

--
-- Indexes for table `trackers`
--
ALTER TABLE `trackers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `index_users_on_id_and_type` (`id`,`type`),
  ADD KEY `index_users_on_auth_source_id` (`auth_source_id`),
  ADD KEY `index_users_on_type` (`type`);

--
-- Indexes for table `user_preferences`
--
ALTER TABLE `user_preferences`
  ADD PRIMARY KEY (`id`),
  ADD KEY `index_user_preferences_on_user_id` (`user_id`);

--
-- Indexes for table `versions`
--
ALTER TABLE `versions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `versions_project_id` (`project_id`),
  ADD KEY `index_versions_on_sharing` (`sharing`);

--
-- Indexes for table `watchers`
--
ALTER TABLE `watchers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `watchers_user_id_type` (`user_id`,`watchable_type`),
  ADD KEY `index_watchers_on_user_id` (`user_id`),
  ADD KEY `index_watchers_on_watchable_id_and_watchable_type` (`watchable_id`,`watchable_type`);

--
-- Indexes for table `wikis`
--
ALTER TABLE `wikis`
  ADD PRIMARY KEY (`id`),
  ADD KEY `wikis_project_id` (`project_id`);

--
-- Indexes for table `wiki_contents`
--
ALTER TABLE `wiki_contents`
  ADD PRIMARY KEY (`id`),
  ADD KEY `wiki_contents_page_id` (`page_id`),
  ADD KEY `index_wiki_contents_on_author_id` (`author_id`);

--
-- Indexes for table `wiki_content_versions`
--
ALTER TABLE `wiki_content_versions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `wiki_content_versions_wcid` (`wiki_content_id`),
  ADD KEY `index_wiki_content_versions_on_updated_on` (`updated_on`);

--
-- Indexes for table `wiki_pages`
--
ALTER TABLE `wiki_pages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `wiki_pages_wiki_id_title` (`wiki_id`,`title`),
  ADD KEY `index_wiki_pages_on_wiki_id` (`wiki_id`),
  ADD KEY `index_wiki_pages_on_parent_id` (`parent_id`);

--
-- Indexes for table `wiki_redirects`
--
ALTER TABLE `wiki_redirects`
  ADD PRIMARY KEY (`id`),
  ADD KEY `wiki_redirects_wiki_id_title` (`wiki_id`,`title`),
  ADD KEY `index_wiki_redirects_on_wiki_id` (`wiki_id`);

--
-- Indexes for table `workflows`
--
ALTER TABLE `workflows`
  ADD PRIMARY KEY (`id`),
  ADD KEY `wkfs_role_tracker_old_status` (`role_id`,`tracker_id`,`old_status_id`),
  ADD KEY `index_workflows_on_old_status_id` (`old_status_id`),
  ADD KEY `index_workflows_on_role_id` (`role_id`),
  ADD KEY `index_workflows_on_new_status_id` (`new_status_id`),
  ADD KEY `index_workflows_on_tracker_id` (`tracker_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `attachments`
--
ALTER TABLE `attachments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_sources`
--
ALTER TABLE `auth_sources`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `boards`
--
ALTER TABLE `boards`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `changes`
--
ALTER TABLE `changes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `changesets`
--
ALTER TABLE `changesets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `custom_fields`
--
ALTER TABLE `custom_fields`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `custom_field_enumerations`
--
ALTER TABLE `custom_field_enumerations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `custom_values`
--
ALTER TABLE `custom_values`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `documents`
--
ALTER TABLE `documents`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `email_addresses`
--
ALTER TABLE `email_addresses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `enabled_modules`
--
ALTER TABLE `enabled_modules`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `enumerations`
--
ALTER TABLE `enumerations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `imports`
--
ALTER TABLE `imports`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `import_items`
--
ALTER TABLE `import_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `issues`
--
ALTER TABLE `issues`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `issue_categories`
--
ALTER TABLE `issue_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `issue_relations`
--
ALTER TABLE `issue_relations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `issue_statuses`
--
ALTER TABLE `issue_statuses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `journals`
--
ALTER TABLE `journals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `journal_details`
--
ALTER TABLE `journal_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `members`
--
ALTER TABLE `members`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `member_roles`
--
ALTER TABLE `member_roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `queries`
--
ALTER TABLE `queries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `repositories`
--
ALTER TABLE `repositories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `time_entries`
--
ALTER TABLE `time_entries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tokens`
--
ALTER TABLE `tokens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `trackers`
--
ALTER TABLE `trackers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `user_preferences`
--
ALTER TABLE `user_preferences`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `versions`
--
ALTER TABLE `versions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `watchers`
--
ALTER TABLE `watchers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `wikis`
--
ALTER TABLE `wikis`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `wiki_contents`
--
ALTER TABLE `wiki_contents`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `wiki_content_versions`
--
ALTER TABLE `wiki_content_versions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `wiki_pages`
--
ALTER TABLE `wiki_pages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `wiki_redirects`
--
ALTER TABLE `wiki_redirects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `workflows`
--
ALTER TABLE `workflows`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=166;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
