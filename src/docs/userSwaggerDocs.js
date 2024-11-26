// All Swagger routes config here 

/**
 * @swagger
 * components:
 *   schemas:
 *     Vendor:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The unique ID of the vendor
 *         vndel_delete_flag:
 *           type: string
 *           description: Delete flag for the vendor
 *         vnco_company_number:
 *           type: string
 *           description: Company number of the vendor
 *         vnvend_vendor_number:
 *           type: string
 *           description: Vendor number
 *         vnname_vendor_name:
 *           type: string
 *           description: Vendor name
 *         vnadd1_address_line1:
 *           type: string
 *           description: Address line 1
 *         vnadd2_address_line2:
 *           type: string
 *           description: Address line 2
 *         vnadd3_address_line3:
 *           type: string
 *           description: Address line 3
 *         vnadd4_address_line4:
 *           type: string
 *           description: Address line 4
 *         vnzip5_zip_code:
 *           type: string
 *           description: ZIP code
 *         vnzpx4_extra_zip:
 *           type: string
 *           description: Extra ZIP code
 *         vnterm_terms_code:
 *           type: string
 *           description: Terms code
 *         vnsort_alpha_sort_abbr:
 *           type: string
 *           description: Alpha sort abbreviation
 *         vnarea_area_code:
 *           type: string
 *           description: Area code
 *         vntele_telephone_number:
 *           type: string
 *           description: Telephone number
 *         vnlpay_last_payment_amount:
 *           type: number
 *           format: float
 *           description: Last payment amount
 *         vnlpdt_last_payment_date:
 *           type: string
 *           format: date
 *           description: Last payment date
 *         vnpytd_ytd_purchases:
 *           type: number
 *           format: float
 *           description: Year-to-date purchases
 *         vnplyr_last_year_purchases:
 *           type: number
 *           format: float
 *           description: Last year purchases
 *         vndmtd_mtd_discounts:
 *           type: number
 *           format: float
 *           description: Month-to-date discounts
 *         vndytd_ytd_discounts:
 *           type: number
 *           format: float
 *           description: Year-to-date discounts
 *         vnovf_name_overflow:
 *           type: string
 *           description: Name overflow
 *         vngrrq_gal_rcpts_required:
 *           type: string
 *           description: GAL receipts required
 *         vnf001_filler:
 *           type: string
 *           description: Filler field
 *         vnpbal_previous_balance:
 *           type: number
 *           format: float
 *           description: Previous balance
 *         vnpurc_mtd_purchases:
 *           type: number
 *           format: float
 *           description: Month-to-date purchases
 *         vnpay_mtd_payments:
 *           type: number
 *           format: float
 *           description: Month-to-date payments
 *         vncbal_current_balance:
 *           type: number
 *           format: float
 *           description: Current balance
 *         vnhold_hold_payments_vendor:
 *           type: string
 *           description: Hold payments for vendor
 *         vnsngl_single_check:
 *           type: string
 *           description: Single check
 *         vnty_dp_this_year_ytd_paid:
 *           type: number
 *           format: float
 *           description: This year's YTD paid
 *         vnly_dp_last_year_ytd_paid:
 *           type: number
 *           format: float
 *           description: Last year's YTD paid
 *         vnexgl_expense_gl_sub:
 *           type: string
 *           description: Expense GL sub-account
 *         vn1099_ap1099_code:
 *           type: string
 *           description: 1099 code
 *         vnidno_1099_id_number:
 *           type: string
 *           description: 1099 ID number
 *         vnbox1_first_1099_box_number:
 *           type: string
 *           description: First 1099 box number
 *         vnbox2_second_1099_box_number:
 *           type: string
 *           description: Second 1099 box number
 *         vnb2am_second_1099_box_amount:
 *           type: number
 *           format: float
 *           description: Second 1099 box amount
 *         vnlpd8_last_payment_date:
 *           type: string
 *           format: date
 *           description: Last payment date
 *         vncai_d_carrier_id:
 *           type: string
 *           description: Carrier ID
 *         vnpyn1_payee_name1:
 *           type: string
 *           description: Payee name 1
 *         vnpyn2_payee_name2:
 *           type: string
 *           description: Payee name 2
 *         vnnmct_irs_name_control:
 *           type: string
 *           description: IRS name control
 *         vnprid_adp_payroll_id:
 *           type: string
 *           description: ADP payroll ID
 *         vnacls_ach_class:
 *           type: string
 *           description: ACH class
 *         vnacos_ach_checking_or_savings:
 *           type: string
 *           description: ACH checking or savings
 *         vnarte_ach_bank_routing_code:
 *           type: string
 *           description: ACH bank routing code
 *         vnabk_ach_bank_account_number:
 *           type: string
 *           description: ACH bank account number
 *         vnfnam_first_name:
 *           type: string
 *           description: First name
 *         vn_mnam_middle_name:
 *           type: string
 *           description: Middle name
 *         vnlnam_business_last_name:
 *           type: string
 *           description: Business last name
 *         vnsuff_name_suffix:
 *           type: string
 *           description: Name suffix
 *         vnctry_country_code:
 *           type: string
 *           description: Country code
 *         vncatg_category_code:
 *           type: string
 *           description: Category code
 *         vnf003_filler:
 *           type: string
 *           description: Filler field
 *       required:
 *         - vnname_vendor_name
 *         - vnvend_vendor_number
 */

/**
 * @swagger
 * /api/vendors:
 *   get:
 *     summary: Retrieve a list of vendors
 *     responses:
 *       200:
 *         description: A list of vendors
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Vendor'
 */

/**
 * @swagger
 * /api/vendors/{id}:
 *   get:
 *     summary: Retrieve a vendor by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A vendor object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vendor'
 */

/**
 * @swagger
 * /api/vendors:
 *   post:
 *     summary: Create a new vendor
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Vendor'
 *     responses:
 *       201:
 *         description: The created vendor
 */

/**
 * @swagger
 * /api/vendors/{id}:
 *   put:
 *     summary: Update a vendor by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Vendor'
 *     responses:
 *       200:
 *         description: The updated vendor
 */

/**
 * @swagger
 * /api/vendors/{id}:
 *   delete:
 *     summary: Delete a vendor by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Vendor deleted
 */
